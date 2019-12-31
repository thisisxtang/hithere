import React, { Component } from "react";
import ActorWho from "./ActorWho";
import Lumina from "./Lumina";
import Watched from "./Watched";
import Home from "./Home";
import { Switch, Route, Link } from "react-router-dom";
import Gridlabel from "./Gridlabel";
import Gridorange from "./Gridorange";
import Circlegrid from "./Circlegrid";
import Rectgrid from "./Rectgrid";
import VXpattern from "./VXpattern";
import LetterArchive from "./LetterArchive";

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
          <Route path="/label">
            <Gridlabel />
          </Route>
          <Route path="/orange">
            <Gridorange />
          </Route>
          <Route path="/one">
            <Circlegrid />
          </Route>
          <Route path="/rectangles">
            <Rectgrid />
          </Route>
          <Route path="/patterns">
            <VXpattern />
          </Route>
          <Route path="/letterarchive">
            <LetterArchive />
          </Route>
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
        </Switch>

        {/* <nav className="robot">
          <Link to="/home">
            <button
              onClick={this.handleClick}
              style={{ display: `${this.state.active}` }}
            >
              Both human and robot are welcome!
            </button>
          </Link>
        </nav> */}
        {/* <Home></Home> */}
      </React.Fragment>
    );
  }
}

export default App;
