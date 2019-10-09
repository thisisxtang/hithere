import React, { Component } from "react";
import * as d3 from "d3";
const width = 850;
const height = 400;
const margin = { top: 20, right: 5, bottom: 20, left: 50 };

class BarChart extends Component {
  state = {
    bars: []
  };

  xAxis = d3.axisBottom().tickFormat(d3.timeFormat("%B%d%Y"));
  yAxis = d3.axisLeft().tickFormat(d => `${d / 1000}千`);

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data, range } = nextProps;
    if (!data) return {};
    console.log(data);

    const extent = d3.extent(data, d => d.date);
    const xScale = d3
      .scaleTime()
      .domain(extent)
      .range([margin.left, width - margin.right]);

    const [min, max] = d3.extent(data, d => d.viewCount);
    const yScale = d3
      .scaleLinear()
      .domain([Math.min(min, 0), max])
      .range([height - margin.bottom, margin.top]);

    const colorExtent = d3.extent(data, d => d.likeCount).reverse();
    const colorScale = d3
      .scaleSequential()
      .domain(colorExtent)
      .interpolator(d3.interpolateRdYlBu);

    const bars = data.map(d => {
      const isColored =
        !range.length || (range[0] <= d.date && d.date <= range[1]);
      return {
        key: d.id,
        x: xScale(d.date),
        y: yScale(d.viewCount),
        height: yScale(0) - yScale(d.viewCount),
        fill: isColored ? colorScale(d.likeCount) : "#ccc"
      };
    });
    return { bars, xScale, yScale };
  }

  componentDidMount() {
    this.brush = d3
      .brushX()
      .extent([
        [margin.left, margin.top], //top-left
        [width - margin.right, height - margin.bottom] //botom-right
      ])
      .on("end", () => {
        //console.log(d3.event.selection);
        const [minX, maxX] = d3.event.selection;
        const range = [
          this.state.xScale.invert(minX),
          this.state.xScale.invert(maxX)
        ];
        //console.log(range);
        this.props.updateRange(range);
      });
    d3.select(this.refs.brush).call(this.brush);
  }

  componentDidUpdate() {
    this.xAxis.scale(this.state.xScale);
    d3.select(this.refs.xAxis).call(this.xAxis);
    this.yAxis.scale(this.state.yScale);
    d3.select(this.refs.yAxis).call(this.yAxis);
  }

  render() {
    return (
      <svg width={width} height={height}>
        {this.state.bars.map(d => (
          <rect
            key={d.key}
            x={d.x}
            y={d.y}
            width={2}
            height={d.height}
            fill={d.fill}
          />
        ))}
        <g ref="xAxis" transform={`translate(0,${height - margin.bottom})`} />
        <g ref="yAxis" transform={`translate(${margin.left},0)`} />
        <g ref="brush" />
      </svg>
    );
  }
}

export default BarChart;
