import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Button,
  Row,
  Col,
  Form,
  Input,
  UncontrolledCollapse,
  Card,
  CardBody,
} from "reactstrap";
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
import Breadcrumbs from "../component/Breadcrumbs";
import BreadCrumbs from "../component/Breadcrumbs";
import { Footer } from "../component/Footer";

export const Bmi = () => {
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
  };
  useEffect(() => {
    if (bmi && bmi < 18.5) {
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

  console.log("valueTextBmi", valueTextBmi);
  console.log("bmi", bmi);
  return (
    <div>
      <div className="bmi-container">
        <Header />
        <br></br>
        <div style={{ paddingLeft: "5%" }}>
          <BreadCrumbs page="BMI" />
        </div>
      </div>

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

          <h3> Your BMI Score <i class="fa-solid fa-circle-info"     id="toggler"></i></h3>
          <br></br>
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4 text-center">
                <br />
                <div style={{ width: 140, height: 140, textAlign: "center" }}>
                  <CircularProgressbar
                    value={bmi}
                    text={`${bmi}`}
                    maxValue="40"
                  />
                </div>
              </div>
              <div className="col-md-6 text-center ">
                <img src={valueImage} width={90} />
              </div>
            </div>
          </div>

          <br></br>
          <div className="d-flex text-center container px-5">
            <span style={{ width: "100%" }}>
              {valueTextBmi}
              <br></br>
            </span>
          </div>
          <br></br>
        </Col>
        <Col className="bg-light border p-5" xs="5">
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
                variant	="success"
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

                variant	="success"
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
          <Button color="success" onClick={handleCaculateBmi}>
            Calculate your BMI
          </Button>{" "}
          <Button color="success" outline>
            {" "}
            Reset{" "}
          </Button>
        </Col>
        <Col xs="1"></Col>
      </Row>
      <br></br>
    

         
          <UncontrolledCollapse toggler="#toggler">
            <Card>
              <CardBody>
              <div className="container">
        <div>
          <div>
            <h1>What is the body mass index (BMI)?</h1>
          </div>
        </div>
        <article>
          <div>
            <div>
              <section>
                <p>
                  <strong>
                    The body mass index&nbsp;(BMI) is a measure that uses your
                    height and weight to work out if your weight is healthy.
                  </strong>
                </p>
                <p>
                  The BMI calculation divides&nbsp;an adult&apos;s weight in
                  kilograms by their height in metres squared. For example, A
                  BMI of 25 means 25kg/m2.
                </p>
              </section>
              <section>
                <h2>BMI ranges</h2>
                <p>
                  For most adults, an ideal BMI is in the 18.5 to 24.9 range.
                </p>
                <p>
                  For children and young people aged&nbsp;2 to 18, the
                  BMI&nbsp;calculation takes into account age and gender as well
                  as height and weight.
                </p>
                <p>If your BMI is:</p>
                <ul>
                  <li>
                    below 18.5&nbsp;&ndash;&nbsp;you&apos;re in
                    the&nbsp;underweight range
                  </li>
                  <li>
                    between 18.5 and 24.9&nbsp;&ndash;&nbsp;you&apos;re in the
                    healthy weight range
                  </li>
                  <li>
                    between 25 and 29.9&nbsp;&ndash;&nbsp;you&apos;re in
                    the&nbsp;overweight range
                  </li>
                  <li>
                    30 or over&nbsp;&ndash;&nbsp;you&apos;re in the&nbsp;obese
                    range
                  </li>
                </ul>
                <p s>
                  If you want to calculate your BMI, you can use
                  the&nbsp;healthy weight calculator.
                </p>
              </section>
              <section>
                <h2>Accuracy of BMI</h2>
                <p>
                  BMI takes into account natural variations in body shape,
                  giving a healthy weight range for a particular height.
                </p>
                <p>
                  As well as measuring your BMI, healthcare professionals may
                  take other factors into account when assessing if you&apos;re
                  a healthy weight.
                </p>
                <p>
                  Muscle is much denser than fat, so very muscular people, such
                  as heavyweight boxers, weight trainers and athletes, may be a
                  healthy weight even though their BMI is classed as obese.
                </p>
                <p>
                  Your ethnic group can also affect your risk of some health
                  conditions. For example, adults of South Asian origin may have
                  a higher risk of some health problems, such as diabetes, with
                  a BMI of 23, which is usually considered healthy.
                </p>
                <p>
                  You should not use BMI as a measure if you&apos;re pregnant.
                  Get advice from your midwife or GP if you&apos;re concerned
                  about your weight.
                </p>
              </section>
            </div>
          </div>
        </article>

        <div>
        
        </div>
      </div>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
      <Footer />
    </div>
  );
};
