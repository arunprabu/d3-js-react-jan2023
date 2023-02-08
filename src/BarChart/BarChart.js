import React, { useEffect, useState } from "react";
import { axisBottom, axisLeft, scaleBand, scaleLinear, select } from "d3";

const BarChart = () => {
  const [playerStats, setPlayerStats] = useState([
    {
      name: "Virat Kohli",
      total: 71,
    },
    {
      name: "Sachin Tendulkar",
      total: 100,
    },
    {
      name: "Ricky Ponting",
      total: 71,
    },
    {
      name: "Kumar Sangakkara",
      total: 63,
    },
    {
      name: "Jacques Kallis",
      total: 62,
    },
  ]);

  let xScale;
  let yScale;
  let colorScale;

  useEffect(() => {
    createAxis();
  }, []);

  const createAxis = () => {
    // creating x-axis
    xScale = scaleBand()
      .domain(playerStats.map((value, index) => index + 1))
      .range([0, 600])
      .padding(0.5);
    const xAxis = axisBottom(xScale).ticks(playerStats.length);
    select("#bottomLine")
      .style("transform", "translateX(50px) translateY(300px)")
      .call(xAxis);

    // creating y-axis
    yScale = scaleLinear().domain([0, 150]).range([300, 0]);
    const yAxis = axisLeft(yScale);
    select("#leftLine").style("transform", "translateX(50px)").call(yAxis);

    colorScale = scaleLinear()
       .domain([60, 65, 70, 75, 100])
       .range(["lightgreen", "green", "blue", "pink", "red"])
       .clamp(true);
       
    drawChart();
  };

  const drawChart = () => {
    let extractDataAsList = [];
    playerStats.map((item) => {
      extractDataAsList = [...extractDataAsList, item.total];
    });
    // create rect to have bar chart
    select("#barChartContainer")
      .selectAll("rect")
      .data(extractDataAsList)
      .join("rect")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => {
        console.log(value, index);
        return xScale(index + 1) + 50;
      })
      .attr("y", -300)
      .attr("width", xScale.bandwidth())
      .attr("height", (value) => {
        return 300 - yScale(value);
      })
      .attr("fill", colorScale);
  }

  return (
    <div>
      <svg id="barChartContainer" width="800" height="600">
        <g id="leftLine"></g>
        <g id="bottomLine"></g>
      </svg>
    </div>
  );
};

export default BarChart;
