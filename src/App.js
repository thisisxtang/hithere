import React, { Component } from "react";
import ActorWho from "./ActorWho";
import Lumina from "./Lumina";
import Watched from "./Watched";
import { Router, Link } from "@reach/router";
import Home from "./Home";

class App extends Component {
  state = {
    active: "block"
  };

  handleClick = () => {
    this.setState({ active: "none" });
  };
  render() {
    return (
      <React.Fragment>
        {/* <Router>
          <Home path="/" />
          <ActorWho path="/actorwho" />

          <Lumina path="/lumina" />
          <Watched path="/watched!" />
        </Router> */}
        <nav className="robot">
          <Link to="/">
            <button
              onClick={this.handleClick}
              style={{ display: `${this.state.active}` }}
            >
              Robot Test
            </button>
          </Link>
        </nav>
      </React.Fragment>
    );
  }
}

export default App;
