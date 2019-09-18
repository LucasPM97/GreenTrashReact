import React, { Component } from "react";
import SimpleMapContainer from "../commons/SimpleMapContainer";

class HomePage extends Component {
  state = {
    pointList: []
  };
  render() {
    return (
        <div style={{ display: "flex" }}>
          <SimpleMapContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;
