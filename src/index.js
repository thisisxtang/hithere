import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Gridorange from "./Gridorange";
// import Gridlabel from "./Gridlabel";
// import VXpattern from "./VXpattern";
// import Rectgrid from "./Rectgrid";
// import Circlegrid from "./Circlegrid";
// import Codestudy from "./Codestudy";
// import Newgridfolio from "./Newgridfolio";

ReactDOM.render(
  <Router basename="hithere">
    <App />
    {/* <Gridlabel /> */}
    {/* <Rectgrid /> */}
    {/* <Circlegrid /> */}
    {/* <Codestudy /> */}
    {/* <Newgridfolio /> */}
  </Router>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
