import React, { Component } from "react";
import Info from "./Info";
import Folio from "./Folio";

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="wrap">
          <Info></Info>
          <Folio></Folio>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
