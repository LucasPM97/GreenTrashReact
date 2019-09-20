import React from "react";
import Map from "pigeon-maps";
import Overlay from "pigeon-overlay";
import Marker from "pigeon-marker";
import LoadingCircle from "./LoadingCircle";
import greenBell from "../../assets/green-bell.png"; //"../../../assets/green-bell.png";
import greenPoint from "../../assets/green-point.png"; //"../../../assets/green-point.png";

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
          <Overlay
            key={x.id_point}
            anchor={x.coords}
            offset={[60, 39]}
            onClick={({ anchor }) => itemOnClick(anchor)}
          >
            <img
              src={getLocationType(x.type)}
              width={50}
              height={50}
              alt={""}
            />
          </Overlay>
        );
      })}
    </Map>
  );
}

function getLocationType(type) {
  switch (type) {
    case "bell":
      return greenBell;
    case "point":
      return greenPoint;

    default:
      return greenPoint;
  }
}

export default SimpleMap;
