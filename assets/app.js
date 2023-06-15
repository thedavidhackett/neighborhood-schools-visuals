import stlEnrollmentLineGraph from "./stlEnrollmentLineGraph.js";
import stlPieCharts from "./pieCharts.js";
import maps from "./stlSchoolsMaps.js";
import barCharts from "./barCharts.js";

window.addEventListener("load", () => {
  stlEnrollmentLineGraph();
  stlPieCharts();
  barCharts();
  maps();
});
