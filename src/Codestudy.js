import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Codestudy extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="codestudy">
          <div className="tag">
            <strong>CODESTUDY</strong>
          </div>
          <div className="nav">
            <nav>
              <Router basename="/hithere" />
              <Link to="/label">
                <strong>Label</strong>
              </Link>
            </nav>
            <nav>
              <Link to="/orange">
                <strong>Orange</strong>
              </Link>
            </nav>
            <nav>
              <Link to="/One">
                <strong>One.</strong>
              </Link>
            </nav>
            <nav>
              <Link to="/rectangles">
                <strong>Rects</strong>
              </Link>
            </nav>
            <nav>
              <Link to="/patterns">
                <strong>Pattern</strong>
              </Link>
            </nav>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Codestudy;
