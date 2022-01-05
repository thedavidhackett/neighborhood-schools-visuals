import { schools2020 } from "./schools2020.js";
import { schools2001 } from "./schools2001.js";

const getSize = (students) => {
  if (students > 750) {
    return 40;
  } else if (students > 500) {
    return 30;
  } else if (students > 250) {
    return 20;
  } else {
    return 10;
  }
};

export default function maps() {
  require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
  ], function (esriConfig, Map, MapView, Graphic) {
    esriConfig.apiKey =
      "AAPKdddfc1d9ded74ffa93cf8d19c90be8aehPv2u_JLKGjwgy3-6-bMYlcFgSKfIZOj8SbO262KI41LTGOCfiITnzE7kapPZTV8";

    function createSchoolMap(container, schools) {
      const map = new Map({
        basemap: "arcgis-dark-gray", // Basemap layer service
        isMapNavigation: false,
      });

      const view = new MapView({
        map: map,
        center: [-90.23, 38.627], // Longitude, latitude
        zoom: 11.5, // Zoom level
        container: container, // Div element
      });

      let count = 1;

      for (let school of schools) {
        if (!school.ALTERNATIVE) {
          let point = {
            type: "point",
            longitude: school.lng,
            latitude: school.lat,
          };
          let simpleMarkerSymbol = {
            type: "simple-marker",
            color: school.MAGNET
              ? [255, 99, 132]
              : school.CHARTER
              ? [255, 205, 86]
              : [54, 162, 235],
            size: `${getSize(school.ENROLLMENT_GRADES_K_12)}px`,
          };

          view.graphics.add(
            new Graphic({
              attributes: {
                objectId: count,
                school: school.SCHOOL_NAME,
                address: `${school.SCHADDR1} Saint Louis, MO ${school.SCHZIP}`,
              },
              geometry: point,
              symbol: simpleMarkerSymbol,
            })
          );
        }

        count++;
      }
      view.ui.remove("zoom");
      console.log(view.ui);
    }
    createSchoolMap("schools2001", schools2001);
    createSchoolMap("schools2020", schools2020);
  });
}
