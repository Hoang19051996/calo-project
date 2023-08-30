import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button, Row, Col, Form, Input } from "reactstrap";
import { useState } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Underweight from "./Assets/bmi/thieucan.png";
import Overweight from "./Assets/bmi/thuacan.png";
import Normalweight from "./Assets/bmi/candoi.png";
import Obesity from "./Assets/bmi/beophi.png";
import Header from "./component/Nav";

function App() {
  const [valueWeight, setValueWeight] = useState(20);
  let minW = 20;
  let minH = 20;
  let maxW = 150;
  let maxH = 250;
  var newBmi;
  const [valueHeight, setValueHeight] = useState(20);

  const [bmi, setBmi] = useState(0);
  const [valueTextBmi, setvalueTextBmi] = useState(0);
  const handleCaculateBmi = () => {
    var fixBmi = valueWeight / ((valueHeight * 2) / 100);
    newBmi = fixBmi.toFixed(2);

    setBmi(newBmi);

    console.log({ newBmi });
    if (newBmi < 18.5) {
      document.getElementById(
        "changeText"
      ).innerHTML = `<p style="text-align : left ; max-width : 300px"> You are in <b>Underweight</b> <br> <br>You are experiencing underweight, <br>so you should apply the methods of eating and exercising to increase body weight. </p> 
      <br>
      <img src=${Underweight} weight="100px" height="160" />
      
      `;
      return;
    }

    if (18.5 <= newBmi && newBmi <= 24.9) {
      document.getElementById(
        "changeText"
      ).innerHTML = `<p style="text-align : left ; max-width : 300px"> You are in <b>Normal Weight</b> <br> <br>You are at a healthy weight, <br>you need to maintain your eating and living routine as usual.</p> 
      <br>
      <img src=${Normalweight} weight="100px" height="160" />

      
      `;
      return;
    }

    if (25 <= newBmi && newBmi<= 29.9) {
      document.getElementById(
        "changeText"
      ).innerHTML = `<p style="text-align : left ; max-width : 300px"> You are in <b>Over Weight</b> <br> <br>You are in a state of overweight,<br> need to apply a reasonable diet menu and scientific exercise to regain the best shape.</p> 
      <br>
      <img src=${Overweight} weight="100px" height="160" />
      
      `;
      return;
    }
    if (newBmi >= 30) {
      document.getElementById(
        "changeText"
      ).innerHTML = `<p style="text-align : left ; max-width : 300px"> You are in <b>Obesity</b> <br> <br>You are obese and this condition can cause you many health and life problems.</p> 
      <br>
      <img src=${Obesity} weight="100px" height="160" />
      
      `;

      return;
    }
  };

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
          <div id="changeText"></div>
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
}

export default App;
