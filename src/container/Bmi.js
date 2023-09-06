import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Row, Col, Form, Input } from "reactstrap";
import { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Underweight from "../Assets/bmi/thieucan.png";
import Overweight from "../Assets/bmi/thuacan.png";
import Normalweight from "../Assets/bmi/candoi.png";
import Obesity from "../Assets/bmi/beophi.png";
import Header from "../component/Nav";
import { useEffect } from "react";

export const  Bmi = () => {
  const [valueWeight, setValueWeight] = useState(20);
  let minW = 20;
  let minH = 20;
  let maxW = 150;
  let maxH = 250;
  var newBmi;
  const [valueHeight, setValueHeight] = useState(20);

  const [bmi, setBmi] = useState("");
  const [valueTextBmi, setValueTextBmi] = useState("");
  const [valueImage, setValueImage] = useState("");
  const handleCaculateBmi = () => {
    var fixBmi = valueWeight / ((valueHeight * 2) / 100);
    newBmi = fixBmi.toFixed(2);

    setBmi(newBmi);
  }
    useEffect(() => {
      if (bmi && bmi < 18.5 ) {
        setValueTextBmi(
          `You are in Underweight You are experiencing underweight, so you should apply the methods of eating and exercising to increase body weight.`
        );

        setValueImage(Underweight);
      } else if (18.5 <= bmi && bmi <= 24.9) {
        setValueTextBmi(
          "You are in Normal Weight. You are at a healthy weight, you need to maintain your eating and living routine as usual."
        );

        setValueImage(Normalweight);
        return;
      } else if (25 <= bmi && bmi <= 29.9) {
        setValueTextBmi(
          "You are in Over Weight. You are in a state of overweight, you need to apply a reasonable diet menu and scientific exercise to regain the best shape.."
        );

        setValueImage(Overweight);
        return;
      } else if (bmi >= 30) {
        setValueTextBmi(
          "You are in Obesity. You are obese and this condition can cause you many health and life problems."
        );

        setValueImage(Obesity);
        return;
      }
    }, [bmi]);

    console.log("valueTextBmi", valueTextBmi)
    console.log("bmi", bmi)
    return (
      <div>
        <Header />
        <br></br>
        <Row>
          <Col xs="1"></Col>
          <Col
            className="bg-light border bmi-left"
            xs="5"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3> Your BMI Score</h3>
            <div style={{ width: 140, height: 140, textAlign: "center" }}>
              <CircularProgressbar value={bmi} text={`${bmi}`} maxValue="40" />
            </div>

            <br></br>
            <div className="d-flex">
              <span style={{width : "70%"}}>{valueTextBmi}<br></br></span> 
              <img src={valueImage} width={90} />
            </div>
            <br></br>
          </Col>
          <Col className="bg-light border " xs="5">
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
            <Button outline color="success" onClick={handleCaculateBmi}>
              Calculate your BMI
            </Button>{" "}
            <Button color="info" outline>
              {" "}
              Reset{" "}
            </Button>
          </Col>
          <Col xs="1"></Col>
        </Row>
      </div>
    );
  };

