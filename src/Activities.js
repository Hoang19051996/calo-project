import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {
  Button,
  Row,
  Col,
  Form,
  Input,
  Container,
  
} from "reactstrap";
import { UncontrolledTooltip } from 'reactstrap';

import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bowling from "./Assets/Bowling.jpg";
import Badminton from "./Assets/Badminton.jpg";
import Basketball from "./Assets/basketball.jpg";
import Boxing from "./Assets/Boxing.jpg";
import Byciling from "./Assets/Byciling.jpg";
import Dancing from "./Assets/Dancing.jpg";
import Gym from "./Assets/Gym.jpg";
import Gymnastics from "./Assets/gymnastics.jpg";
import Hiking from "./Assets/Hiking.jpg";
import Running from "./Assets/Running.jpg";
import skate from "./Assets/skateboard.jpg";
import Soccer from "./Assets/Soccer.jpg";
import Swimming from "./Assets/Swimming.jpg";
import Tennis from "./Assets/Tennis.jpg";
import Volleyball from "./Assets/Volleyball.jpg";
import Walking from "./Assets/Walking.jpg";

function App() {
  return (
    <Container>
      <Row>
        <Col sm={2}>aaa</Col>
        <Col sm={10}>
          <Row>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities" id="bowling">
                <img src={Bowling} width={90}></img>
                <p>Bowling</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Badminton} width={90}></img>
                <p>Badminton</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Basketball} width={90}></img>
                <p>Basketball</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Boxing} width={90}></img>
                <p>Boxing</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Byciling} width={90}></img>
                <p>Byciling</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Dancing} width={90}></img>
                <p>Dancing</p>
              </span>
            </Col>
          
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Gym} width={90}></img>
                <p>Gym</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Gymnastics} width={90}></img>
                <p>Gymnastics</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Hiking} width={90}></img>
                <p>Hiking</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Running} width={90}></img>
                <p>Running</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={skate} width={90}></img>
                <p>Skateboard</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Soccer} width={90}></img>
                <p>Soccer</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Swimming} width={90}></img>
                <p>Swimming</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Tennis} width={90}></img>
                <p>Tennis</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Volleyball} width={90}></img>
                <p>Volleyball</p>
              </span>
            </Col>
            <Col sm={3} style={{ padding: 10 }}>
              <span className="activities">
                <img src={Walking} width={90}></img>
                <p>Walking</p>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <UncontrolledTooltip
        placement="right"
        target="bowling"
       size = {320}
      >
        <h5>Calories burned in 30-minutes activities</h5>
        <table style={{borderBottomColor : 'white' , borderwidth : 1}}>
          <tbody>
            <tr>
              <td style={{width: '100px' }}>56kg </td>
              <td style={{width: '100px'}}>70kg </td>
              <td style={{width: '100px'}}>83kg </td>
            </tr>
            <tr >
              <td>90</td>
              <td>108</td>
              <td>125</td>
            </tr>
          </tbody>
        </table>
      </UncontrolledTooltip>
    </Container>
  );
}

export default App;
