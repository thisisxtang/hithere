import React, { Component } from "react";
import ActorWho from "./ActorWho";
import Lumina from "./Lumina";
import Watched from "./Watched";
import { Router } from "@reach/router";
import Home from "./Home";

class App extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Router>
          <Home path="/" />
          <ActorWho path="/actorwho" />
          <Lumina path="/lumina" />
          <Watched path="/watched!" />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
