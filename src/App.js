import React, { Component } from "react";
import ActorWho from "./ActorWho";
import Lumina from "./Lumina";
import Watched from "./Watched";
// import { Router, Link } from "@reach/router";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    // active: "block"
  };

  // handleClick = () => {
  //   this.setState({ active: "none" });
  // };
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/actorwho">
            <ActorWho />
          </Route>
          <Route path="/lumina">
            <Lumina />
          </Route>
          <Route path="/watched!">
            <Watched />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* <Router><Home path="/" />
          <ActorWho path="/actorwho" />

          <Lumina path="/lumina" />
          <Watched path="/watched!" /></Router> */}
        </Switch>

        {/* <nav className="robot">
          <Link to="/">
            <button
              onClick={this.handleClick}
              style={{ display: `${this.state.active}` }}
            >
              Robot Test
            </button>
          </Link>
        </nav> */}
      </React.Fragment>
    );
  }
}

export default App;
