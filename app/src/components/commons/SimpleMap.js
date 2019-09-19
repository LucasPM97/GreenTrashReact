import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import LoadingCircle from "./LoadingCircle";

function SimpleMap({
  greenPoints,
  defaultMapConfig,
  userConfig,
  itemOnClick,
  isLoading
}) {
  return (
    <Map
      center={userConfig ? userConfig.mapCoords : defaultMapConfig.mapCoords}
      zoom={userConfig ? userConfig.zoom : defaultMapConfig.zoom}
      height={700}
    >
      {isLoading && <LoadingCircle />}
      {userConfig && <Marker anchor={userConfig.actualCoords} payload={1} />}
      {greenPoints.map(x => {
        return (
          <Marker
            key={x.id_point}
            anchor={x.coords}
            payload={1}
            onClick={({ anchor }) => itemOnClick(anchor)}
          />
        );
      })}
    </Map>
  );
}

export default SimpleMap;
