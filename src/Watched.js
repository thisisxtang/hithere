import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FigureImage from "react-bootstrap/FigureImage";
import surveillance1 from "./images/surveillance1.jpg";
import surveillance2 from "./images/surveillance2.jpg";
import surveillance5 from "./images/surveillance5.jpg";
import surveillance6 from "./images/surveillance6.jpg";
import surveillance13 from "./images/surveillance13.JPG";
import surveillance14 from "./images/surveillance14.jpg";
import dangstring from "./images/dangstring.png";
import surveillance17 from "./images/surveillance17.jpg";
import surveillance9 from "./images/surveillance9.JPG";
import surveillance10 from "./images/surveillance10.JPG";
import surveillance11 from "./images/surveillance11.jpg";
import surveillance12 from "./images/surveillance12.jpg";
import surveillance8 from "./images/surveillance8.jpg";
// import { Link } from "@reach/router";
import { Link } from "react-router-dom";

class Watched extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="cool-button">
          <nav>
            <Link to="/">
              <button id="tang">TANG</button>
            </Link>
            <Link to="/actorwho">
              <button className="next">NEXT</button>
            </Link>
          </nav>
        </div>
        <div className="details">
          <Container>
            <div className="detail-head">
              <Row>
                <Col xs={6}>
                  <h4>
                    <strong>WATCHED!</strong>
                  </h4>
                  <p>
                    Digital Media Design | Speculative Design | IoT
                    <br />
                    Featured: Dissertation Awarded with Distinction
                    <br />
                    Date: 2017
                  </p>
                </Col>
                <Col xs={6}>
                  <FigureImage src={surveillance2}></FigureImage>
                </Col>
              </Row>
            </div>
          </Container>

          <Container>
            <Row>
              <Col xs={12} md={6}>
                <div className="detail-block">
                  <p>
                    <strong>Design Brief</strong>
                  </p>

                  <p>
                    One of the most profound deja vu in this technology era is
                    surveillance. In contemporary society, surveillance evolves
                    from physically being watched into personal data collecting,
                    data analysis, and data trading. Such data surveillance is
                    embedded in a wide spectrum of information technologies, it
                    takes forms of various innovative products and services,
                    which constitute our life imaginary. In this relationship,
                    design plays an important role. It stands for providing the
                    right tools or solutions for people to "make do and get by"
                    things to keep going on in the word. However, the risk is
                    that no matter controversial a product might be, people will
                    find a way to make sense of it and make it compatible to
                    their own life. We might fully understand the risk of
                    putting all the personal health data to a tracking APP, but
                    we can't resist the desires of knowing ourselves better and
                    deeper, or even more, we can't afford to not to.
                  </p>
                  <p>
                    As the interface between human and the surveillance, design
                    influence the way how we perceive them and that determines
                    how we live with these technologies. It is increasingly
                    important to ask the role of design in our everyday lives,
                    asking what values, attitudes, and ways of looking at the
                    world they may encourage or inhibit.
                  </p>
                  <p>
                    WATCHED! took an experimental approach to inspect how design
                    will influence the way people perceive surveillance.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <Container>
            <div className="detail-block">
              <Row>
                <Col xs={12} md={6}>
                  <p>
                    <strong>Design Story</strong>
                  </p>
                  <p>
                    Watched! is an IoT surveillance system that integrates two
                    parts: a sensor surveillance system and an ambient display.
                  </p>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <p>
                    {/* <small> */}
                    <strong>sensor surveillance system</strong>
                    {/* </small> */}
                  </p>
                  <p>
                    It consists of six sensor bugs, each one of them is paired
                    with one sound sensor, one motion sensor, and one distance
                    sensor. They can collect human behavior data within their
                    detective range. The whole system intends to create a
                    surveilled environment, it is the metaphor for the
                    ubiquitous contemporary data surveillance.
                  </p>
                  <FigureImage src={surveillance13}></FigureImage>
                  <FigureImage src={surveillance14}></FigureImage>
                </Col>

                <Col xs={12} md={6}>
                  <p>
                    {/* <small> */}
                    <strong>ambient display</strong>
                    {/* </small> */}
                  </p>
                  <p>
                    It takes advantage of calm technology which is a kind of
                    technology that moves between the periphery and the center
                    of the user’s attention. It usually intends to provide
                    information in a non-obtrusive and encalming way, so that
                    the user is able to attune more information while keeping
                    it's at the periphery of attention. The most famous one is
                    the Dangling String (Weiser and Brown 1996). A simple
                    hanging piece of wire installed in an unused corner of a
                    hallway, shake more or less according to the traffic of
                    local network.
                  </p>
                  <FigureImage src={dangstring}></FigureImage>
                  <p>
                    Here, the ambient display is designed to use a LED screen to
                    display the real-time surveillance data visualization in an
                    unobtrusive way. It intends to fit into the background and
                    offers a window of awareness. It is the designed interface
                    between human and surveillance. People will build their
                    understanding about Watched! through it.
                  </p>
                  <FigureImage src={surveillance17}></FigureImage>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <div className="detail-block">
              <Row>
                <Col xs={12} md={6}>
                  <p>
                    {/* <small> */}
                    <strong>Experiment in the Wild</strong>
                    {/* </small> */}
                  </p>
                  <p>
                    {/* <small> */}
                    <strong>set up</strong>
                    {/* </small> */}
                  </p>
                  <p>
                    WATCHED! was installed in a studio, all participants were
                    given a clear explanation about the surveillance system and
                    gave their consent to be monitored by sensors. Six sensor
                    bugs were distributed and hidden in inconspicuous corners of
                    the studio to create an omnibearing surveillance in this
                    space. The ambient display was located in an open area so
                    that it was visible from any direction in the studio.
                    Additionally, to make it fit into the environment, it was
                    put in front of a black wall that matches its color.
                  </p>
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col md={6} xs={12}>
                  <FigureImage src={surveillance8}></FigureImage>
                </Col>
              </Row>

              <Row>
                <Col xs={6} md={3}>
                  <FigureImage src={surveillance9}></FigureImage>
                </Col>
                <Col xs={6} md={3}>
                  <FigureImage src={surveillance10}></FigureImage>
                </Col>
                <Col xs={6} md={3}>
                  <FigureImage src={surveillance11}></FigureImage>
                </Col>
                <Col xs={6} md={3}>
                  <FigureImage src={surveillance12}></FigureImage>
                </Col>
              </Row>

              <br />
              <br></br>

              <Row>
                <Col xs={12} md={6}>
                  <p>
                    <strong> during the experiment</strong>
                  </p>
                  <p>
                    The experiment lasted for one week.
                    <br />
                    In the beginning, most participants felt confused and
                    anxious with WATCHED!. They reported that although the data
                    visualization was not disturbing, the idea of being
                    surveilled worried them. As the design strategy, the data
                    visualization didn’t perform much influence on participants‘
                    perception of surveillance.
                  </p>
                  <br></br>
                  <FigureImage src={surveillance5}></FigureImage>
                  <FigureImage src={surveillance6}></FigureImage>
                </Col>
              </Row>
              <br></br>
              <br></br>
              <Row>
                <Col xs={12} md={6}>
                  <p>
                    <strong>one week later</strong>
                  </p>
                  <p>
                    WATCHED! encouraged some behavioral changes. Once
                    participants were familiarised with the data visualization,
                    one participant reported to use it for daydreaming, and two
                    others claimed to use it to track the noise level in the
                    studio. The fact of surveillance was less worrying for the
                    participants in general, instead, most of the participants
                    agreed that WATCHED! increased their awareness of
                    surveillance with data visualization.
                  </p>
                  <br></br>
                  <FigureImage src={surveillance1}></FigureImage>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <Row>
              <div className="detail-block">
                <Col xs={12} md={6}>
                  <p>
                    <strong>Question for the Future</strong>
                  </p>
                  <p>
                    WATCHED! as a designed solution for contemporary
                    surveillance, uses simple yet genuine design strategy to
                    ease the tension between people and surveillance. It
                    indicates that design can change people’s perception of
                    surveillance and influence the relationship between them,
                    but the role of design remains obscure. Did it aim to help
                    people remain calm while raising their awareness of
                    surveillance? Or did it want to lure people to lose their
                    cautions and gradually adapt to the technology? Is it a
                    mediator or an exacerbator?
                  </p>
                </Col>
              </div>
            </Row>
          </Container>
          <Container>
            <Row>
              <div className="detail-block">
                <Col xs={12} md={6}>
                  <p>
                    <strong>Rethink Binary</strong>
                  </p>
                  <p>
                    In this increasingly complex world, it is hard to draw a
                    line for surveillance or any controversial technology as
                    good or bad. Design is shaping the way we perceive them - on
                    the one hand by providing insights and critical
                    sensibilities for making sense of the world at large, and on
                    the other by fuelling the market with products that allow
                    people to ‘make do and get by’ without worrying about
                    potential consequences. Sometimes in order to ‘go on’ in the
                    world of economy, we need both sides of the design to work.
                    Thereby, we must rethink its role as a mixture of mediator
                    and exacerbator. It is time to rethink binary, to
                    acknowledge the limits of any binaristic view, to emphasize
                    design strategies premised on multiplicity, and to consider
                    values, assumptions, and alternative uses throughout the
                    design process. It will not answer all ethical questions but
                    it may create room for designs that integrate diverse
                    values.
                  </p>
                </Col>
              </div>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Watched;
