import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FigureImage from "react-bootstrap/FigureImage";
import actorwho1 from "./images/actorwho1.jpg";
import actorwho2 from "./images/actorwho2.jpg";
import actorwho3 from "./images/actorwho3.jpg";
// import { Link } from "@reach/router";
import { Link } from "react-router-dom";

class ActorWho extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="cool-button">
          <nav>
            <Link to="/home">
              <button id="tang">TANG</button>
            </Link>
            <Link to="/lumina">
              <button className="next">NEXT</button>
            </Link>
          </nav>
        </div>

        <div className="details">
          <Container>
            <Row>
              <Col xs={6} md={5}>
                <div className="detail-head">
                  <h4>
                    <strong>ACTOR WHO</strong>
                  </h4>

                  <p>
                    Interaction Design | Creative Campaign
                    <br />
                    Client: BBC
                    <br />
                    Featured: 2017 D&AD Award Yellow Pencil
                    <br />
                    Date: May 2017
                  </p>
                </div>
                <div className="detail-block">
                  <p>
                    <strong>Design Brief</strong>
                  </p>
                  <p>
                    The Edinburgh Festivals are respected world-renowned events.
                    They bring together all forms of arts, performance, science,
                    and literature. Unlike other festivals and sporting events,
                    the August Edinburgh Festivals blur the lines between
                    performers and audiences.
                  </p>
                  <p>
                    By their very nature, as city-wide events spread across
                    hundreds of venues, the festivals encourage interaction
                    between those visiting for pleasure and those actively
                    participating. To capture the spirit of the events for those
                    who can’t attend, we use the power of technology to connect
                    a global audience with the Edinburgh experience.
                  </p>
                </div>
                <div className="detail-block">
                  <p>
                    <strong>Design Story</strong>
                  </p>
                  <p>
                    Actor Who is a transmedia story created for the BBC that
                    captures the serendipitous spirit of the Edinburgh
                    Festivals. By allowing both online and physical audiences to
                    participate through viewing/voting on Twitter and
                    auditioning in Edinburgh phone booths, the multi-platform
                    experience lets participants work together to create the
                    story. Housed between Twitter, and a bespoke
                    hardware/software application, the system allows for a
                    choose-your-own style of crowdsourced content from across
                    the world to be made with minimal technological adoption
                    issues. Actor Who allows anyone to live their unique story
                    of the Edinburgh Festivals, regardless of where they are.
                  </p>
                </div>
                <div className="detail-block">
                  <p>
                    <strong>Design Logic</strong>
                  </p>
                  <p>
                    {/* <small> */}
                    <strong>data-driven</strong>
                    {/* </small> */}
                  </p>
                  <p>
                    The Data-driven methodology is used to build user persona
                    for the Edinburgh Festival and to inform design strategies
                    for branding, use of technology, and user experience.
                  </p>
                  <Container style={{ textAlign: "center" }}>
                    <Row>
                      <Col xs={4} md={4}>
                        <small>
                          <strong>EDINBURGH FESTIVAL </strong> <br />
                          <strong>50,266</strong> <br />
                          PERFORMANCES
                          <br />
                          <strong>31,545</strong> <br />
                          PARTICIPANTS
                          <br />
                          <strong>294</strong> <br />
                          VENUES
                          <br />
                          <strong>48</strong> <br />
                          COUNTRIES [FRINGE] <br />
                          <strong>2,475,143</strong> <br />
                          TICKETS SOLD
                          <br />
                        </small>
                      </Col>
                      <Col xs={4} md={4}>
                        <small>
                          <strong>BBC MARKETING </strong> <br />
                          <strong>348M</strong> <br />
                          WEEKLY AUDIENCE
                          <br />
                          <strong>120+</strong> <br />
                          CHANNELS
                          <br />
                          <strong>12</strong> <br />
                          BRANDS
                          <br />
                          <strong>7</strong> <br />
                          STRATEGIES
                          <br />
                        </small>
                      </Col>
                      <Col xs={4} md={4}>
                        <small>
                          <strong>@EDFESTS TWITTER</strong> <br />
                          <strong>50,7K</strong> <br />
                          @EDFESTS
                          <br />
                          <strong>14,1K</strong> <br />
                          @EDFRINGE
                          <br />
                          <strong>15,3K</strong> <br />
                          @EDINBURGHTATTOO
                          <br />
                          <strong>48,9K</strong> <br />
                          @EDINFEST
                          <br />
                          <strong>16,7K</strong> <br />
                          @EDARTFEST
                          <br />
                        </small>
                      </Col>
                    </Row>
                  </Container>
                  <br></br>
                  <p>
                    <small>· 2016 statistic</small>
                  </p>
                  <br></br>
                  <br></br>
                  <p>
                    {/* <small> */}
                    <strong>visual language</strong>
                    {/* </small> */}
                  </p>
                  <p>
                    <small>
                      <strong>Why red telephone booths? </strong>
                    </small>
                    <br></br>
                    The choice to use telephone booths as the main iconography
                    is due to both the instant international recognition of the
                    red booths as the visual identity for the United Kingdom and
                    the connection Edinburgh has to historical architecture.
                    Several booths are located in the heart of the city, but go
                    relatively unused, creating a unique opportunity to gain
                    invaluable real estate during the festivals with instant
                    visual recognition.
                  </p>
                  <p>
                    <small>
                      <strong>Why "Actor Who"? </strong>
                    </small>
                    <br></br>
                    The choice of the name Actor Who is to resonate with BBC’s
                    famous science fiction television program Doctor Who, and to
                    reinforce the identity and branding of BBC.
                  </p>
                  <br></br>
                  <br></br>
                  <p>
                    {/* <small> */}
                    <strong>the nudges</strong>
                    {/* </small> */}
                  </p>
                  <p>
                    <small>
                      <strong>Nudge One</strong>
                    </small>
                    <br></br>
                    By connecting the online and offline audiences through
                    social media and physical phone booth, it creates an
                    interesting interaction circle between these two media.
                    Users are nudged to experience both to complete the whole
                    story.
                  </p>
                  <p>
                    <small>
                      <strong>Nudge Two</strong>
                    </small>
                    <br></br>
                    Actor Who takes advantage of the randomness and sociality of
                    the phone booth to fit into the social context, and
                    intrigues people to sneak peek inside with strong visual
                    attraction.
                  </p>
                  <p>
                    <small>
                      <strong>Nudge Three</strong>
                    </small>
                    <br></br>
                    The easy-to-use audition system lower the technical barrier
                    for the general user to interact with Actor Who, and the IoT
                    design ‘Ringtone Trigger’ helps to attract their attention.
                  </p>
                </div>
              </Col>
              <Col xs={6} md={7}>
                <FigureImage src={actorwho1} fluid></FigureImage>
                <iframe
                  title="actorwho"
                  src="https://player.vimeo.com/video/246452268"
                  width="100%"
                  height="480"
                  frameborder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
                <FigureImage src={actorwho2} fluid></FigureImage>
                <FigureImage src={actorwho3} fluid></FigureImage>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default ActorWho;
