import React from "react";

function Map(props) {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic2h1Ymhhbms3NjczIiwiYSI6ImNqdDF3anZ5djBobm00NXF1ZHJ4cmdpcXoifQ.jgD2DJLzB_Pf96L_4yH6WA";
  var map = new mapboxgl.Map({
    container: "map", // container id
    style: "mapbox://styles/mapbox/streets-v9",
    center: [-74.5, 40], // starting position
    zoom: 9 // starting zoom
  });

  // Add zoom and rotation controls to the map.
  map.addControl(new mapboxgl.NavigationControl());
  return <div id="map" style="width: 400px; height: 300px;" />;
}

export default Map;
