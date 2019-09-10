import React from "react";

function Marker({ color }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          height: 50,
          width: 50,
          background: color != null ? color : "red"
        }}
      ></div>
    </div>
  );
}

export default Marker;
