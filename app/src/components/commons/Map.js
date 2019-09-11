import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import { usePosition } from "../../api/usePosition";

function SimpleMap({ greenPoints }) {
  const { latitude, longitude, error } = usePosition();

  const defaultMapConfig = {
    coords: [-34.61921765948196, -58.44759256950819],
    zoom: 12
  };

  let userConfig = getPositionArray(latitude, longitude, error);

  return (
    <Map
      center={userConfig ? userConfig.coords : defaultMapConfig.coords}
      zoom={userConfig ? userConfig.zoom : defaultMapConfig.zoom}
      height={700}
    >
      {userConfig && <Marker anchor={userConfig.coords} payload={1} />}

      {greenPoints.map(x => {
        return <Marker key={x.id_point} anchor={x.coords} payload={1} />;
      })}
    </Map>
  );
}

function getPositionArray(latitude, longitude, error) {
  if (error || latitude == null || longitude == null) {
    return null;
  }
  return { coords: [latitude, longitude], zoom: 17 };
}

export default SimpleMap;
