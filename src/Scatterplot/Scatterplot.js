import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const Scatterplot = () => {
  const [searchEngines, setSearchEngines] = useState([]);

  useEffect(() => {
    setSearchEngines([
      {
        name: "Google",
        cx: 120,
        cy: 160,
        r: 120,
        fill: "red",
        link: "https://www.google.com",
      },
      {
        name: "Bing",
        cx: 250,
        cy: 450,
        r: 100,
        fill: "green",
        link: "https://www.bing.com",
      },
      {
        name: "Yahoo",
        cx: 500,
        cy: 200,
        r: 70,
        fill: "blue",
        link: "https://www.yahoo.com",
      },
      {
        name: "Yandex",
        cx: 400,
        cy: 400,
        r: 70,
        fill: "purple",
        link: "https://www.yandex.com",
      },
    ]);
  }, []);

  console.log(searchEngines);

  const drawChart = () => {
    d3.select("#svgWrapper")
      .selectAll("circles")
      .data(searchEngines)
      .enter()
      .append("circle")
      .attr("cx", ({ cx }) => cx)
      .attr("cy", ({ cy }) => cy)
      .attr("r", ({ r }) => r)
      .attr("fill", ({ fill }) => fill);
  };
  drawChart();

  return (
    <div>
      <svg id="svgWrapper" width="600" height="600"></svg>
    </div>
  );
};

export default Scatterplot;
