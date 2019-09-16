import React, { Component } from "react";
import Map from "../commons/SimpleMap";

class HomePage extends Component {
  state = {
    pointList: []
  };
  render() {
    return (
      <div style={{ display: "flex" }}>
        <Map greenPoints={this.state.pointList} />
      </div>
    );
  }
}

export default HomePage;
