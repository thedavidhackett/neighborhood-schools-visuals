import { stlGrouped2000, stlGrouped2020, stlGrouped2014 } from "./data.js";

export default function stlPieCharts() {
  let publicData2000 = [0, 0, 0];
  let publicData2020 = [0, 0, 0];
  let publicData2000ByType = {};
  let publicData2020ByType = {};
  let publicData2014ByType = {};

  for (let schoolType of stlGrouped2000) {
    publicData2000[0] = publicData2000[0] + schoolType["ENROLLMENT_BLACK"];
    publicData2000[1] = publicData2000[1] + schoolType["ENROLLMENT_WHITE"];
    publicData2000[2] =
      publicData2000[2] +
      (schoolType["ENROLLMENT_GRADES_K_12"] -
        schoolType["ENROLLMENT_BLACK"] -
        schoolType["ENROLLMENT_WHITE"]);
    publicData2000ByType[schoolType["TYPE"]] = [
      schoolType["ENROLLMENT_BLACK"],
      schoolType["ENROLLMENT_WHITE"],
      schoolType["ENROLLMENT_GRADES_K_12"] -
        schoolType["ENROLLMENT_BLACK"] -
        schoolType["ENROLLMENT_WHITE"],
    ];
  }

  for (let schoolType of stlGrouped2020) {
    if (schoolType["TYPE"] != "Charter") {
      publicData2020[0] = publicData2020[0] + schoolType["ENROLLMENT_BLACK"];
      publicData2020[1] = publicData2020[1] + schoolType["ENROLLMENT_WHITE"];
      publicData2020[2] =
        publicData2020[2] +
        (schoolType["ENROLLMENT_GRADES_K_12"] -
          schoolType["ENROLLMENT_BLACK"] -
          schoolType["ENROLLMENT_WHITE"]);
    }
    publicData2020ByType[schoolType["TYPE"]] = [
      schoolType["ENROLLMENT_BLACK"],
      schoolType["ENROLLMENT_WHITE"],
      schoolType["ENROLLMENT_GRADES_K_12"] -
        schoolType["ENROLLMENT_BLACK"] -
        schoolType["ENROLLMENT_WHITE"],
    ];
  }

  for (let schoolType of stlGrouped2014) {
    publicData2014ByType[schoolType["TYPE"]] = [
      schoolType["LUNCH_COUNT_FREE_REDUCED"],
      schoolType["ENROLLMENT_GRADES_K_12"] -
        schoolType["LUNCH_COUNT_FREE_REDUCED"],
    ];
  }

  let raceLabels = ["African American", "White", "All Other Groups"];
  let raceColors = [
    "rgb(84, 46, 113)",
    "rgb(253, 202, 64)",
    "rgb(167, 153, 183)",
  ];

  function createPieChart(name, data, targetDiv, labels, colors) {
    let chartData = {
      labels: labels,
      datasets: [
        {
          label: name,
          data: data,
          backgroundColor: colors,
          hoverOffset: 4,
        },
      ],
    };
    const chartConfig = {
      type: "pie",
      data: chartData,
      options: {
        plugins: {
          title: {
            display: true,
            text: name,
          },
        },
      },
    };

    new Chart(document.getElementById(targetDiv), chartConfig);
  }

  createPieChart(
    "Public Schools By Race 2000",
    publicData2000,
    "publicSchools2000pie",
    raceLabels,
    raceColors
  );

  createPieChart(
    "Public Schools By Race 2020",
    publicData2020,
    "publicSchools2020pie",
    raceLabels,
    raceColors
  );
  createPieChart(
    "Charter Schools By Race 2020",
    publicData2020ByType["Charter"],
    "charterSchools2020pie",
    raceLabels,
    raceColors
  );

  createPieChart(
    "Magnet Schools By Race 2000",
    publicData2000ByType["Magnet"],
    "magnetSchools2000pie",
    raceLabels,
    raceColors
  );

  createPieChart(
    "Neighborhood Schools By Race 2000",
    publicData2000ByType["Neighborhood"],
    "neighborhoodSchools2000pie",
    raceLabels,
    raceColors
  );
  createPieChart(
    "Magnet Schools By Race 2020",
    publicData2000ByType["Magnet"],
    "magnetSchools2020pie",
    raceLabels,
    raceColors
  );

  createPieChart(
    "Neighborhood Schools By Race 2020",
    publicData2020ByType["Neighborhood"],
    "neighborhoodSchools2020pie",
    raceLabels,
    raceColors
  );
  createPieChart(
    "Charter Schools By Race 2020",
    publicData2020ByType["Charter"],
    "charterSchools2020pie2",
    raceLabels,
    raceColors
  );
}
