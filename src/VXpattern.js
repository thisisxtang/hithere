import React, { Component } from "react";
import { Bar, Circle } from "@vx/shape";
import { PatternLines, PatternCircles, PatternWaves } from "@vx/pattern";
import "./VXpattern.css";
import { transform } from "@babel/core";

const width = "200%";
const height = "100%";
const patternRatio = 30;
const stroke = 8;

class VXpattern extends Component {
  state = {
    bars: [
      { id: 1, pattern: "vLines" }
      // { id: 2, pattern: "dLines" },
      // { id: 3, pattern: "dLines" },
      // { id: 11, pattern: "dLines" },
      // { id: 12, pattern: "dLines" },
      // { id: 13, pattern: "dLines" },
      // { id: 21, pattern: "dLines" },
      // { id: 22, pattern: "dLines" },
      // { id: 23, pattern: "dLines" },
      // { id: 31, pattern: "dLines" },
      // { id: 32, pattern: "dLines" },
      // { id: 33, pattern: "dLines" }
    ]
  };

  render() {
    return (
      <div className="gridpattern">
        <div className="vxitem1">
          {this.state.bars.map(d => (
            <svg key={d.id} width={width} height={height}>
              <PatternLines
                id={d.pattern}
                height={patternRatio}
                width={patternRatio}
                stroke="#B6E8EC"
                strokeWidth={stroke}
                orientation={["diagonal"]}
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
        <div className="vxitem2">
          {/* <svg
            height={height}
            width={width}
            // transform={"rotate(90)"}
          >
            <Circle cx={0} cy={0} r={80} fill="#f6c431" />
            {/* <Bar
              fill={`url(#dLines)`}
              width={width}
              height={height}
              x={0}
              y={0}
            /> 
          </svg> */}
        </div>
        <div className="vxitem3"></div>
        <div className="vxitem4"></div>
        <div className="vxitem5"></div>
      </div>
    );
  }
}

export default VXpattern;
