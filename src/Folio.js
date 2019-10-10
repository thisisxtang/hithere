import React, { Component } from "react";
import FigureImage from "react-bootstrap/FigureImage";
import actorwho from "./images/actorwho.jpg";
import curtain from "./images/curtain.jpg";
import surveillance from "./images/surveillance.jpg";
import Time from "./Time";
// import { Link } from "@reach/router";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Folio extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div className="folio">
          <div className="folio_wrap">
            <div
              className="folio_project folio_project-1"
              style={{ marginTop: 0 }}
            >
              <div id="bg-1">
                <FigureImage src={actorwho} fluid />
              </div>
              <nav>
                <Router basename="/hithere" />
                <Link to="/actorwho">
                  <strong>
                    <h1>Actor Who</h1>
                  </strong>
                </Link>
              </nav>
            </div>
            <div className="folio_project folio_project-2">
              <div id="bg-2">
                <FigureImage src={curtain} fluid />
              </div>
              <nav>
                <Router basename="/hithere" />
                <Link to="/lumina">
                  <strong>
                    <h1>Lumina</h1>
                  </strong>
                </Link>
              </nav>
            </div>
            <div className="folio_project folio_project-3">
              <div id="bg-3">
                <FigureImage src={surveillance} fluid />
              </div>
              <nav>
                <Router basename="/hithere" />
                <Link to="/watched!">
                  <strong>
                    <h1>Watched!</h1>
                  </strong>
                </Link>
              </nav>
            </div>
            <div id="bg-4" className="folio_project folio_project-4">
              <h1>
                <p>
                  <span role="img" aria-label="image">
                    🤸🏻‍
                  </span>
                </p>

                <strong>
                  <Time></Time>
                </strong>
              </h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Folio;
