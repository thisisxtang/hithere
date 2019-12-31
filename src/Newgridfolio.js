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
  backgroundImage: `url(${actorwho})`,
  backgroundPosition: "center"
};
const curtainStyle = {
  backgroundSize: "cover",
  backgroundImage: `url(${curtain})`,
  backgroundPosition: "center"
};
const surveillanceStyle = {
  backgroundSize: "cover",
  backgroundImage: `url(${surveillance})`
  // backgroundPosition: "center"
};
const timeStyle = {
  backgroundColor: "#1818bf"
};

class Newgridfolio extends Component {
  state = {
    folio: [
      {
        id: "actorwho",
        style: actorwhoStyle,
        link: "/actorwho",
        title: "ACTOR WHO"
      },
      {
        id: "curtain",
        style: curtainStyle,
        link: "/luminawho",
        title: "LUMINA"
      },
      {
        id: "surveillance",
        style: surveillanceStyle,
        link: "/watched!",
        title: "WATCHED!"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="newwrap">
          <div className="newinfo">
            <Codestudy />
          </div>
          <div className="newfolio">
            {this.state.folio.map(d => (
              <div key={d.id} className="newfolioitem" style={d.style}>
                <div className="newfoliobutton">
                  <Router basename="/hithere" />
                  <Link to={d.link}>
                    <h1>{d.title}</h1>
                  </Link>
                </div>
              </div>
            ))}
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
