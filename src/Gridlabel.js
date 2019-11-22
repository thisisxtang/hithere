import React, { Component } from "react";
import "./Gridlabel.css";
import FigureImage from "react-bootstrap/FigureImage";
import adidas from "./images/adidas.jpg";

class Gridlabel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="label">
          <div className="reference">
            <FigureImage src={adidas}></FigureImage>
          </div>
          <div className="brand">
            <h1>
              <strong>adidas</strong>
            </h1>
          </div>
          <div className="gridlabel">
            <div className="gridlabelitem highlight label0"></div>
            <div className="gridlabelitem highlight label01"></div>
            <div className="gridlabelitem highlight label02"></div>
            <div className="gridlabelitem highlight label03"></div>
            <div className="gridlabelitem highlight label04"></div>
            <div className="gridlabelitem highlight label05"></div>
            <div className="gridlabelitem highlight label1">
              <p>Questar TND</p>
            </div>
            <div className="gridlabelitem highlight label2">
              <p>
                9
                <sup>
                  <small>1</small>
                </sup>
                /
                <sub>
                  <small>2</small>
                </sub>
              </p>
            </div>
            <div className="gridlabelitem highlight label3">
              <p>9</p>
            </div>
            <div className="gridlabelitem highlight label15">
              <p>BB2540</p>
            </div>
            <div className="gridlabelitem label4">
              <p>US</p>
            </div>
            <div className="gridlabelitem label5">
              <p>US</p>
            </div>

            <div className="gridlabelitem highlight label6">
              <p>43</p>
            </div>
            <div className="gridlabelitem highlight label7">
              <p>9</p>
            </div>
            <div className="gridlabelitem label16">
              <p>
                FTWWHT/FTWWHT/CLONIX
                <br />
                FTWBLA/FTWBLA/ONYCLA
                <br />
                CORE FOOTWARE
                <br />
                SPORT
              </p>
            </div>
            <div className="gridlabelitem label8">
              <p>F</p>
            </div>
            <div className="gridlabelitem label9">
              <p>D</p>
            </div>
            <div className="gridlabelitem highlight label10">
              <p>275</p>
            </div>
            <div className="gridlabelitem highlight label11">
              <p>265</p>
            </div>
            <div className="gridlabelitem label17">
              <p>
                MADE IN VIETNAM
                <br />
                FABRIQUE AU VIETNAM
              </p>
            </div>

            <div className="gridlabelitem label12">
              <p>J</p>
            </div>
            <div className="gridlabelitem label13">
              <p>CHN</p>
            </div>
            <div className="gridlabelitem label18"></div>
            <div className="gridlabelitem label19">
              <p>
                EAN PO#114272096
                <br />
                ABSBOX/0314/V10
              </p>
            </div>
            <div className="gridlabelitem label20"></div>
            <div className="gridlabelitem label21"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Gridlabel;
