import React from "react";
import Map from "pigeon-maps";
import { usePosition } from "../../api/usePosition";
import Marker from "./Marker";
import MapLayout from "./MapLayout";

function SimpleMap() {
  const { latitude, longitude, error } = usePosition();

  console.log(latitude, longitude, error);

  let { coords, zoom } = getPositionArray(latitude, longitude, error);

  return (
    <Map center={coords} zoom={zoom} height={700}>
      <MapLayout>
        <Marker />
      </MapLayout>
    </Map>
  );
}

function getPositionArray(latitude, longitude, error) {
  if (error || latitude == null || longitude == null) {
    return { coords: [-34.61921765948196, -58.44759256950819], zoom: 17 };
  }
  return { coords: [latitude, longitude], zoom: 17 };
}

export default SimpleMap;
