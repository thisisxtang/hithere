import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Codestudy extends Component {
  state = {
    codestudy: [
      { id: "label", link: "/label", title: "Label" },
      { id: "orange", link: "/orange", title: "Orange" },
      { id: "One.", link: "/One", title: "One." },
      { id: "rects", link: "/rectangles", title: "Rects" },
      { id: "pattern", link: "/patterns", title: "Pattern" },
      { id: "letterArchive", link: "/letterarchive", title: "LetterArchive" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="codestudy">
          <div className="tag">
            <strong>CODESTUDY</strong>
          </div>
          <div className="nav">
            {this.state.codestudy.map(d => (
              <nav key={d.id}>
                <Router basename="/hithere" />
                <Link to={d.link}>
                  <strong>{d.title}</strong>
                </Link>
              </nav>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Codestudy;
