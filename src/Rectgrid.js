import React, { Component } from "react";
import "./Rectgrid.css";

class Rectgrid extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="rectgrid">
          <div className="rectitem">
            <div className="insideitem"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Rectgrid;
