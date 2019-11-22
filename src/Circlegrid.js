import React, { Component } from "react";
import "./Circlegrid.css";
import one from "./images/one.jpg";
import FigureImage from "react-bootstrap/FigureImage";

class Circlegrid extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="wrap">
          <div className="grid">
            <div className="grid__item">
              <div className="content">
                <div className="content-inside"></div>
              </div>
            </div>
            <div className="grid__item">
              <div className="content">
                <div className="content-inside inside01"></div>
                <div className="content-inside inside02">
                  <h2>ONE.</h2>
                </div>
                <div className="content-inside inside03">
                  <h2>ONE.</h2>
                  <h3>
                    ONE.
                    <br />
                    MEDIA
                  </h3>
                  <p>ONE. MEDIA</p>
                </div>
                <div className="content-inside inside04">
                  <h2>ONE.</h2>
                  <h3>
                    ONE.
                    <br />
                    MEDIA
                  </h3>
                  <p>ONE. MEDIA</p>
                </div>
                <div className="content-inside inside05">
                  <h3>
                    ONE.
                    <br />
                    MEDIA
                  </h3>
                  <p>ONE. MEDIA</p>
                </div>
                <div className="content-inside inside06"></div>
                <div className="content-inside inside07">
                  <div className="insidecircle01">
                    <p>ONE.</p>
                  </div>
                </div>
                <div className="content-inside inside08">
                  <div className="insidecircle02">
                    <p>
                      <small>ONE.</small>
                    </p>
                  </div>
                </div>
                <div className="content-inside inside09">
                  <div className="insidecircle03">
                    <p>
                      <small>ONE.</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid__item">
              <div className="content">
                <div className="content-inside"></div>
              </div>
            </div>
          </div>
          <div className="referenceone">
            <FigureImage src={one}></FigureImage>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Circlegrid;
