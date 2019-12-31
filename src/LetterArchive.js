import React, { Component } from "react";
import "./LetterArchive.css";
import { Bar } from "@vx/shape";
import { PatternLines } from "@vx/pattern";
import FigureImage from "react-bootstrap/FigureImage";
import letterarchive from "./images/letterarchive.jpg";
import letterarchivebg from "./images/letterarchivebg.jpg";
import letterarchivered from "./images/letterarchivered.jpg";

const width = "100%";
const height = "100%";
const patternRatio = 6;
const stroke = 2;

const letterarchiveStyle = {
  backgroundSize: "50%",
  backgroundImage: `url(${letterarchivebg})`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat"
};
const letterarchiveredStyle = {
  backgroundSize: "50%",
  backgroundImage: `url(${letterarchivered})`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat"
};

class LetterArchive extends Component {
  state = {
    bars: [{ id: 1, pattern: "vLines" }]
  };
  render() {
    return (
      <React.Fragment>
        <div className="letterwrap">
          <div className="letterArchive" style={letterarchiveStyle}>
            <div className="topLeft">
              <div className="redRect" style={letterarchiveredStyle}></div>
              <div className="biebl">
                <strong>KONSTANTIN BIEBL</strong>
              </div>
            </div>
            <div className="middle">
              <div className="mrect1"></div>
              <div className="mrect2">
                <div className="redLines">
                  {this.state.bars.map(d => (
                    <svg key={d.id} width={width} height={height}>
                      <PatternLines
                        id={d.pattern}
                        height={patternRatio}
                        width={patternRatio}
                        stroke="#A9220E"
                        strokeWidth={stroke}
                        orientation={["vertical"]}
                      />
                      <Bar
                        fill={`url(#${d.pattern})`}
                        height={height}
                        width={width}
                        x={0}
                        y={0}
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="bottomLeft">
              <div className="brect1"></div>
              <div className="brect2">
                <div className="zlom">
                  <strong>ZLOM</strong>
                </div>
              </div>
              <div className="brect3">NOVEVYDANI</div>
            </div>
            <div className="right"></div>
          </div>
          <div className="letterReference">
            <FigureImage src={letterarchive}></FigureImage>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LetterArchive;
