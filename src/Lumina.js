import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FigureImage from "react-bootstrap/FigureImage";
import lumina1 from "./images/lumina1.jpeg";
import lumina2 from "./images/lumina2.png";
import lumina3 from "./images/lumina3.jpeg";
import lumina4 from "./images/lumina4.JPG";
// import lumina5 from "./images/lumina5.png";
// import lumina6 from "./images/lumina6.png";
import lumina7 from "./images/lumina7.jpg";
// import lumina8 from "./images/lumina8.JPG";
import lumina9 from "./images/lumina9.jpg";
import lumina11 from "./images/lumina11.jpg";
// import { Link } from "@reach/router";
import { Link } from "react-router-dom";

class Lumina extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="cool-button">
          <nav>
            <Link to="/">
              <button id="tang">TANG</button>
            </Link>
            <Link to="/watched!">
              <button className="next">NEXT</button>
            </Link>
          </nav>
        </div>
        <FigureImage src={lumina1}></FigureImage>

        <div className="details">
          <Container>
            <div className="detail-head">
              <h4>
                <strong>LUMINA</strong>
              </h4>
              <p>
                Digital Media Design | Speculative Design
                <br />
                Featured: Exhibited in 2017 Edinburgh Fringe ‘Future Play’
                <br />
                Date: 2017
              </p>
            </div>
          </Container>
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <div className="detail-block">
                  <p>
                    <strong>Design Brief</strong>
                  </p>
                  <p>
                    What is story-telling all about today? A mixture of forms,
                    genres, technologies, and lots of data to build the details.
                    How to read a story has become a way of seeing. Take an
                    example of data journalist, there are various data
                    visualizations to present facts with elaborately designed
                    interaction for exploration, and a wide spectrum of
                    technologies manipulating sound and visual effect to advance
                    the overall experience. The audiences are supposed to get
                    immersed in the story and have a better understanding of it.
                    However, when there is too much information load at the same
                    time, it can be overwhelming. Sometimes, the more we see,
                    the less we pay attention to the story itself. We are
                    encouraged to see the story from different perspectives but
                    none from our own. Lumina comes from a simple question: how
                    to minimalize storytelling?{" "}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <div className="detail-block">
                  <p>
                    <strong>Design Story</strong>
                  </p>
                  <p>
                    For Lumina, the idea is to use minimal data and
                    representation to tell a story. For a human, nothing is more
                    simple but informative than those everyday subjects. Lumina
                    chooses the images of the most common things that people see
                    in their daily life, like lights, books, flowers, and web
                    pages et al. By dramatically reducing the details, Lumina
                    puts them at the threashold of the recognision. Only after a
                    few seconds of observation, the viewer will consitute the
                    image into a completed idea.{" "}
                  </p>
                  <p>
                    During that process, the viewers attach more information to
                    what they see by either adding imagination or recognizing
                    old memories. Then she/he starts to see a story. The story
                    that comes from their unique life experience and has
                    dintinct narratives belong to the very person. Other than
                    its minimal data presented, Lumina actually borrows more
                    information from its viewer and that make the final story
                    feels highly intimate and personal.
                  </p>
                </div>
              </Col>
              <Col md={2} xs={12}></Col>
              <Col md={4} xs={12}>
                <FigureImage src={lumina2}></FigureImage>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <div className="detail-block">
                  <iframe
                    title="lumina"
                    src="https://player.vimeo.com/video/215822393"
                    width="100%"
                    height="480"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                  ></iframe>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <div className="detail-block">
                  <p>
                    <strong>Engineering is fun!</strong>
                  </p>
                  <p>
                    The engineering work of Lumina is quite challenging. No one
                    in the studio has ever worked with 1500 leds at one time
                    before. After I was told that the voltage needed could
                    actually kill a less than 5.3-foot tiny Asian girl. I was a
                    little worried.{" "}
                    <span role="img" aria-label="image">
                      🤖🤖🤖
                    </span>
                  </p>
                  <p>
                    I spent lots of hours on the wiring and soldering work to
                    connect the 50 led strips correctly so that every pixel will
                    be in the right place. In contrarary, the Arduino part was
                    just a piece of cake, although I burned three Arduino boards
                    in one week. I bet the studio technician regretted to warm
                    me about the voltage thing.{" "}
                    <span role="img" aria-label="image">
                      👹👹👹
                    </span>
                  </p>
                  <p>
                    All in all, it was a crazy time for me, but I really enjoyed
                    all the design, engineering and programming works. There
                    were lots lots lots of fun.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <div className="detail-block">
                  <FigureImage src={lumina11}></FigureImage>
                  {/* <FigureImage src={lumina8}></FigureImage> */}
                  <FigureImage src={lumina9}></FigureImage>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={6} xs={12}>
                <div className="detail-block">
                  <p>
                    <strong>A big thanks!</strong>
                  </p>
                  <p>
                    Last but not least, a big thanks to all my talented friends
                    who gave me so many inspiring and interesting suggestions
                    for Lumina. They helped to make Lumina the best it could
                    ever be.
                  </p>
                  {/* <p>
                    When Lumina was lights up successfully for the first time, I
                    did't use any thing to cover those led strips but it reminds
                    me that when I was a child, I would apply different color
                    ink on a special Chinese paiting paper, and how beatiful it
                    looks when the ink diffused. That's the reason why I chose
                    it as a curtain for led strips and it is the best decision
                    ever. See, everyone can have a unique story with Lumina.
                  </p> */}
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col md={6} xs={12} style={{ paddingRight: "0.25rem" }}>
                <FigureImage src={lumina3}></FigureImage>
              </Col>
              <Col md={6} xs={12} style={{ paddingLeft: "0.25rem" }}>
                <FigureImage src={lumina4}></FigureImage>
              </Col>
            </Row>
          </Container>
          <Container>
            <FigureImage src={lumina7}></FigureImage>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Lumina;
