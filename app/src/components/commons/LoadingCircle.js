import React from "react";
import "../../css/Map.css";

function LoadingCircle() {
  return (
    <div className="loadScreen">
      <div className="progress-container">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingCircle;
