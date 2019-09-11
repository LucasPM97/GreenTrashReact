import React, { Component } from "react";
import Map from "../commons/Map";

class HomePage extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Map
          greenPoints={[
            { coords: [-34.61921765948196, -58.44759256950819], id_point: "1" }
          ]}
        />
      </div>
    );
  }
}

export default HomePage;
