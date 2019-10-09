import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container className="margin-top">
          <h2>
            <strong>ABOUT ME</strong>
          </h2>
          <Container
            className="aboutborder-top"
            style={{ paddingLeft: 0, paddingRight: 0 }}
          >
            <Row>
              <Col xs={12} md={4}>
                <div className="margin-bottom">
                  <strong>Experience</strong>
                </div>

                <p>
                  02/2019 - 07/2019
                  <br /> Product Designer
                  <br /> Baidu
                  <br /> Beijing China
                </p>
                <p>
                  07/2018 - 01/2019
                  <br /> Research Assistant
                  <br /> Design Informatics Lab
                  <br /> Edinbugh University
                  <br /> Edinburgh UK
                </p>
              </Col>
              <Col xs={12} md={4} className="aboutborder">
                <div className="margin-bottom">
                  <strong>Education</strong>
                </div>

                <p>
                  2016 - 2017
                  <br /> Design Informatics
                  <br /> MS.c Distinction
                  <br /> Edinburgh University
                  <br /> Edinburgh UK
                </p>
                <p>
                  2015 - 2018
                  <br /> Computer Science
                  <br /> MS.c GPA 3.4
                  <br /> Central South University
                  <br /> China
                </p>
                <p>
                  2010 - 2014
                  <br /> Software Engineering
                  <br /> B.S GPA 84
                  <br /> Central South University
                  <br /> China
                </p>
              </Col>
              <Col xs={12} md={4}>
                <div className="margin-bottom">
                  <strong>Skill</strong>
                </div>

                <p>
                  Data Visualization Design
                  <br />
                  IoT Design
                  <br />
                  Interaction Design
                  <br /> User Experience Design
                  <br /> Critical Thinking
                </p>
                <p>
                  Front-End Development
                  <br /> Arduino Engineering
                </p>
                <p>Tools: Adobe CC, Sketch, Axure</p>
                <p>Programming: React, Javascript, HTML, CSS</p>
              </Col>
            </Row>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

export default About;
