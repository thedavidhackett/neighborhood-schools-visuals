import { stlGrouped2014 } from "./data.js";

export default function barCharts() {
  const labels = ["Neighborhood", "Magnet", "Charter"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: null,
        data: [
          (stlGrouped2014[0].LUNCH_COUNT_FREE_REDUCED /
            stlGrouped2014[0].ENROLLMENT_GRADES_K_12) *
            100,
          (stlGrouped2014[2].LUNCH_COUNT_FREE_REDUCED /
            stlGrouped2014[2].ENROLLMENT_GRADES_K_12) *
            100,
          (stlGrouped2014[3].LUNCH_COUNT_FREE_REDUCED /
            stlGrouped2014[3].ENROLLMENT_GRADES_K_12) *
            100,
        ],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
        ],
        borderColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "rgb(255, 205, 86)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: "bar",
    data: data,
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          min: 50,
          max: 100,
          ticks: {
            callback: function (value, index, values) {
              return value + "%";
            },
          },
        },
      },
    },
  };

  new Chart(document.getElementById("freelunch"), config);
}
