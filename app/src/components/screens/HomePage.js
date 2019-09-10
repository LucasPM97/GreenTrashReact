import React, { Component } from "react";
import Map from "../Map";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>Home Page</h1>
        </div>
        <Map />
      </div>
    );
  }

  componentDidMount() {
    //TODO: Get the locations of GreenPlaces into the map
  }
}

export default HomePage;
