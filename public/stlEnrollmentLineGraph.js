import { stlEnrollment } from "./data.js";

export default function stlEnrollmentLineGraph() {
  let years = [];
  let magnetEnrollment = [];
  let alternativeEnrollment = [];
  let neighborhoodEnrollment = [];
  let charterEnrollment = [];
  let studentAgedPop = [];

  for (let row of stlEnrollment) {
    years.push(row.year);
    magnetEnrollment.push(row.magnet);
    neighborhoodEnrollment.push(row.neighborhood);
    alternativeEnrollment.push(row.alternative);
    charterEnrollment.push(row.charter);
    studentAgedPop.push(row.student_aged);
  }

  const data = {
    labels: years,
    datasets: [
      {
        label: "Neighborhood Enrollment",
        backgroundColor: "#36a3eb",
        borderColor: "#36a3eb",
        data: neighborhoodEnrollment,
        fill: true,
        stack: "schools",
        pointRadius: 0,
      },
      {
        label: "Magnet Enrollment",
        backgroundColor: "#ff6385",
        borderColor: "#ff6385",
        data: magnetEnrollment,
        fill: true,
        stack: "schools",
        pointRadius: 0,
      },
      {
        label: "Charter Enrollment",
        backgroundColor: "#ffcc56",
        borderColor: "#ffcc56",
        data: charterEnrollment,
        fill: true,
        stack: "schools",
        pointRadius: 0,
      },
      {
        label: "Student Age Population",
        backgroundColor: "#D3D3D3",
        borderColor: "#D3D3D3",
        data: studentAgedPop,
        pointRadius: 0,
      },
    ],
  };
  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        legend: {
          position: "bottom",
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            callback: function (value, index, values) {
              return index % 2 == 0 ? this.getLabelForValue(value) : "";
            },
          },
        },
        y: {
          stacked: true,
          grid: {
            display: false,
          },
        },
      },
    },
  };
  const stlEnrollmentChart = new Chart(
    document.getElementById("stlEnrollment"),
    config
  );
}
