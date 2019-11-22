import React, { Component } from "react";
import "./Newgridfolio.css";
import actorwho from "./images/actorwho.jpg";
import curtain from "./images/curtain.jpg";
import surveillance from "./images/surveillance.jpg";
import Time from "./Time";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Codestudy from "./Codestudy";

const actorwhoStyle = {
  backgroundSize: "cover",
  backgroundImage: `url(${actorwho})`
};
const curtainStyle = {
  backgroundSize: "cover",
  backgroundImage: `url(${curtain})`
};
const surveillanceStyle = {
  backgroundSize: "cover",
  backgroundImage: `url(${surveillance})`
};
const timeStyle = {
  backgroundColor: "#1818bf"
};

class Newgridfolio extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="newwrap">
          <div className="newinfo">
            <Codestudy />
          </div>
          <div className="newfolio">
            <div className="newfolioitem" style={actorwhoStyle}>
              <div className="newfoliobutton">
                <Router basename="/hithere" />
                <Link to="/actorwho">
                  <h1>ACTOR WHO</h1>
                </Link>
              </div>
            </div>
            <div className="newfolioitem" style={curtainStyle}>
              <div className="newfoliobutton">
                <Router basename="/hithere" />
                <Link to="/lumina">
                  <h1>LUMINA</h1>
                </Link>
              </div>
            </div>
            <div className="newfolioitem" style={surveillanceStyle}>
              <div className="newfoliobutton">
                <Router basename="/hithere" />
                <Link to="/watched!">
                  <h1>WATCHED!</h1>
                </Link>
              </div>
            </div>
            <div className="newfolioitem" style={timeStyle}>
              <div className="newfoliotime">
                <strong>
                  <Time></Time>
                </strong>
                <h2>
                  <span role="img" aria-label="image">
                    🤸🏻‍
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Newgridfolio;
