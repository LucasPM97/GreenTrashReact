import React from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

function SimpleMap({ greenPoints, defaultMapConfig, userConfig }) {
  return (
    <Map
      center={userConfig ? userConfig.coords : defaultMapConfig.coords}
      zoom={userConfig ? userConfig.zoom : defaultMapConfig.zoom}
      height={700}
    >
      {userConfig && <Marker anchor={userConfig.coords} payload={1} />}
      {/* {userConfig &&
        userConfig.zoneCoords.map((x, index) => {
          return <Marker key={"zone_" + index} anchor={x} payload={1} />;
        })} */}

      {greenPoints.map(x => {
        return <Marker key={x.id_point} anchor={x.coords} payload={1} />;
      })}
    </Map>
  );
}

export default SimpleMap;
