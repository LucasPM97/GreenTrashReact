import React, { Component } from "react";

import SimpleMap from "./SimpleMap";
import locationHelpers from "../../helpers/locationHelpers";
import points from "../../api/points";

class SimpleMapContainer extends Component {
  state = {
    defaultMapConfig: {
      coords: [-34.61921765948196, -58.44759256950819],
      zoom: 12
    },
    userConfig: null,
    greenPoints: []
  };

  watcher = null;
  geo = null;

  render() {
    return (
      <SimpleMap
        greenPoints={this.state.greenPoints}
        defaultMapConfig={this.state.defaultMapConfig}
        userConfig={this.state.userConfig}
      />
    );
  }

  componentDidMount() {
    //Set listener for geolocation
    this.geo = navigator.geolocation;
    if (!this.geo) {
      console.log("Geolocation is not supported");
      return;
    }
    this.watcher = this.geo.watchPosition(this.onChange, this.onError);
  }

  onChange = async ({ coords }) => {
    const { latitude, longitude } = coords;

    const { top, rigth, left, bottom } = locationHelpers.getZoneBoundsByCoords(
      latitude,
      longitude
    );

    this.setState({
      userConfig: {
        coords: [latitude, longitude],
        zoom: 17,
        zoneCoords: [
          [top.latitude, top.longitude],
          [bottom.latitude, bottom.longitude],
          [left.latitude, left.longitude],
          [rigth.latitude, rigth.longitude]
        ]
      }
    });

    this.cleanLocationWatcher();

    // points
    //   .getNearLocations(top, left, bottom, rigth)
    //   .then(positions => this.setState({

    //   }));
  };
  onError = error => {
    console.log(error);
  };
  componentWillUnmount() {
    this.cleanLocationWatcher();
  }

  cleanLocationWatcher() {
    this.geo.clearWatch(this.watcher);
    this.geo = null;
    this.watcher = null;
  }
}

export default SimpleMapContainer;
