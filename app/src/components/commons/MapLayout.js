import React from "react";

function MapLayout(props) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%"
      }}
    >
      {props.children}
    </div>
  );
}

export default MapLayout;
