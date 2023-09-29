import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Form,
  Input,
  FormGroup,
  Label,
  Table,
} from "reactstrap";
import { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";

import "react-circular-progressbar/dist/styles.css";
import Header from "../component/Nav";
import { useDispatch } from "react-redux";
import { setTotalCaloDaily } from "../store/Food";
import { useNavigate } from "react-router-dom";
import { border } from "@mui/system";
import BreadCrumbs from "../component/Breadcrumbs";
import { Footer } from "../component/Footer";

// const MyComponent = ({ title, min, max }) => {
//   const [value, setValue] = useState(20);

//   return (
//     <Row>
//       <Col xs="6">
//         <span> {title}</span>
//         <RangeSlider
//           value={value}
//           onChange={(changeEvent) => setValue(changeEvent.target.value)}
//           min={min}
//           max={max}
//         />
//         <span style={{ display: "flex ", justifyContent: "space-between" }}>
//           <p>{min}</p>
//           <p>{max}</p>
//         </span>
//       </Col>
//       <Col xs="3">
//         <br></br>
//         <Input
//           type="number"
//           value={value}
//           min={min}
//           max={max}
//           onChange={(changeEvent) => setValue(changeEvent.target.value)}
//         />
//       </Col>
//     </Row>
//   );
// };

const percentage = 27;
var exCalo;
var exWeight;
function CalculatorCalo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [valueWeight, setValueWeight] = useState(20);
  const [valueAge, setValueAge] = useState(0);

  let minW = 20;
  let minH = 20;
  let maxW = 150;
  let maxH = 250;

  const [valueHeight, setValueHeight] = useState(20);
  const [caloValue, setCaloValue] = useState(0);
  const [gender, setGender] = useState(true);
  const [bmrValue, setBmrValue] = useState(0);
  const changeGenerTrue = () => {
    setGender(true);
  };

  const changeGenerFalse = () => {
    setGender(false);
  };

  const [selected, setSelectedOption] = useState("aa");
  let [valueR, setValueR] = useState(null);

  useEffect(() => {
    if (selected == "option1") {
      setValueR(1.2);
    } else if (selected == "option2") {
      setValueR(1.375);
    } else if (selected == "option3") {
      setValueR(1.55);
    } else if (selected == "option4") {
      setValueR(1.725);
    } else if (selected == "option5") {
      setValueR(1.9);
    }
  }, [selected]); // select

  const handleCalculateCalo = () => {
    let newbmr = 0;
    // let bmrMale = 66 + 13.7 * valueWeight + 5 * valueHeight - 6.8 * valueAge;
    let bmrMale = 10*valueWeight + 6.25*valueHeight - 5*valueAge +5 ;

    // let bmrFemale =
      // 655 + 9.6 * valueWeight + 1.8 * valueHeight - 4.7 * valueAge;
      let bmrFemale = 10*valueWeight + 6.25*valueHeight - 5*valueAge -161;
      // 655 + 9.6 * valueWeight + 1.8 * valueHeight - 4.7 * valueAge;
    if (gender === true && valueWeight > 0 && valueHeight > 0 && valueAge > 0) {
      newbmr = bmrMale;
      console.log("bmrValue", newbmr);
    } else if (
      gender === false &&
      valueWeight > 0 &&
      valueHeight > 0 &&
      valueAge > 0
    ) {
      newbmr = bmrFemale;

      console.log("bmrValue", newbmr);
    }

    // setBmrValue(

    //   gender
    //     ? 66 + 13.7 * valueWeight + 5 * valueHeight - 6.8 * valueAge
    //     : 655 + 9.6 * valueWeight + 1.8 * valueHeight - 6.8 * valueAge
    // );

    console.log("value R" , valueR)
    console.log("bmr " ,newbmr )
    let caloValueToFix = (newbmr * valueR).toFixed(0);

    setCaloValue(caloValueToFix);
    dispatch(setTotalCaloDaily(caloValueToFix));

    exCalo = newbmr * valueR;
    exWeight = valueWeight;
  };

  return (
    <div>
      <Header />
      <br></br>
      <div style={{ paddingLeft: "5%" }}>
        <BreadCrumbs page="Calorie calculator" />
      </div>

      <div className="container">
        <div className="row">
          <div
            className="col-md-6 bg-light border bmi-left"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3>Your Daily Calories</h3>
            <span className="calories"> {caloValue} Cal</span>
            <br></br>
            <table className="table-dailycalo">
              <thead>
                <tr scope="row">
                  <td colspan="2">
                    <strong>Keep weight</strong>
                  </td>

                  <td colspan="2">{caloValue} Calories/day (100%)</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row" colspan="2">
                    <strong>Weight loss</strong>
                  </td>

                  <td colspan="2">
                    <strong>Weight gain</strong>
                  </td>
                </tr>
                <tr>
                  <td scope="row">
                    <strong>Light weight loss (0.25kg/week)</strong>
                  </td>
                  <td>{(caloValue * 0.91).toFixed()} Calories/day (91%)</td>
                  <td>
                    <strong>Light weight gain (0.25kg/week)</strong>
                  </td>
                  <td>{(caloValue * 1.1).toFixed()} Calories/day (109%)</td>
                </tr>
                <tr>
                  <td scope="row">
                    {" "}
                    <strong>Weight loss (0.5kg/week)</strong>
                  </td>
                  <td>{(caloValue * 0.82).toFixed()} Calories/day (82%)</td>
                  <td>
                    <strong>Weight gain (0.5kg/week)</strong>
                  </td>
                  <td>{(caloValue * 1.18).toFixed()} Calories/day (118%)</td>
                </tr>
              </tbody>
            </table>

            <div class="pt-5" onClick={() => navigate("/dailycalo")}>
                          <h6 class="mb-0">
                            <a href="#!" class="text-body">
                             
                         {caloValue ?   (<> <span>Control your meal</span> <i class='fas fa-long-arrow-alt-right me-2'></i></>) : "" }   
                            </a>
                          </h6>
                        </div>
          </div>

          <div className="col-md-6 bg-light border  ">
            <br></br>
            <FormGroup row>
              <Label sm={3}>Select your genders</Label>
              <Col sm={8}>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    onClick={changeGenerTrue}
                    spellCheck
                  />{" "}
                  <Label check>Male</Label>
                </FormGroup>
                <FormGroup check>
                  <Input
                    name="radio1"
                    type="radio"
                    onClick={changeGenerFalse}
                  />{" "}
                  <Label check>Female</Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={3}>Age </Label>
              <Col sm={8}>
                <Input
                  type="number"
                  className="w-25"
                  min="10"
                  max="80"
                  placeholder="10-80"
                  value={valueAge}
                  onChange={(e) => setValueAge(e.target.value)}
                />
              </Col>
            </FormGroup>
            {/* Row của weight */}
            <Row>
              <Col xs="6">
                <span> Weight ( kg )</span>
                <RangeSlider
                  value={valueWeight}
                  onChange={(changeEvent) =>
                    setValueWeight(changeEvent.target.value)
                  }
                  min={minW}
                  max={maxW}
                />
                <span
                  style={{ display: "flex ", justifyContent: "space-between" }}
                >
                  <p>{minW}</p>
                  <p>{maxW}</p>
                </span>
              </Col>
              <Col xs="3">
                <br></br>
                <Input
                  type="number"
                  value={valueWeight}
                  min={minW}
                  max={maxW}
                  onChange={(changeEvent) =>
                    setValueWeight(changeEvent.target.value)
                  }
                />
              </Col>
            </Row>
            {/* Row của Height */}
            <Row>
              <Col xs="6">
                <span> Height ( cm )</span>
                <RangeSlider
                  value={valueHeight}
                  onChange={(changeEvent) =>
                    setValueHeight(changeEvent.target.value)
                  }
                  min={minH}
                  max={maxH}
                />
                <span
                  style={{ display: "flex ", justifyContent: "space-between" }}
                >
                  <p>{minH}</p>
                  <p>{maxH}</p>
                </span>
              </Col>
              <Col xs="3">
                <br></br>
                <Input
                  type="number"
                  value={valueHeight}
                  min={minH}
                  max={maxH}
                  onChange={(changeEvent) =>
                    setValueHeight(changeEvent.target.value)
                  }
                />
              </Col>
            </Row>
            <FormGroup row>
              <Label sm={4}>Select your activities</Label>
              <Col sm={8}>
                <Input
                  id="select"
                  name="select"
                  type="select"
                  onChange={(e) => setSelectedOption(e.target.value)}
                  value={selected}
                >
                   <option value="0">
                  ---Choose one option---
                  </option>
                  <option value="option1">
                    Sedentary: little or no more excercise
                  </option>
                  <option value="option2">
                    Light: excercise 1-3 times/week
                  </option>
                  <option value="option3">
                    Moderate: excercise 4-5 times/week
                  </option>
                  <option value="option4">
                    Active: daily excercise or intense excercise 3-4 times/week
                  </option>
                  <option value="option5">
                    Very active: intense excercise 6-7 times/week
                  </option>
                </Input>
              </Col>
            </FormGroup>
            <Button  color="success" onClick={handleCalculateCalo} >
              Calculate your Calories
            </Button>{" "}
            <Button color="success" outline>
              {" "}
              Reset{" "}
            </Button>
          </div>
        </div>
      </div>
      <br />

      <br />
      <Footer />
    </div>
  );
}
export { exCalo, exWeight };

export default CalculatorCalo;
