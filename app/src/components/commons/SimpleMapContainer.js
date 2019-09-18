import React, { Component } from "react";

import SimpleMap from "./SimpleMap";
import locationHelpers from "../../helpers/locationHelpers";
import points from "../../api/points";

class SimpleMapContainer extends Component {
  state = {
    defaultMapConfig: {
      mapCoords: [-34.61921765948196, -58.44759256950819],
      zoom: 12
    },
    userConfig: null,
    greenPoints: [],
    isLoading: true
  };

  watcher = null;
  geo = null;

  render() {
    return (
      <SimpleMap
        greenPoints={this.state.greenPoints}
        defaultMapConfig={this.state.defaultMapConfig}
        userConfig={this.state.userConfig}
        itemOnClick={itemCoords => {
          this.setState({
            userConfig: { ...this.state.userConfig, mapCoords: itemCoords }
          });
        }}
        isLoading={this.state.isLoading}
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

    this.setState({
      userConfig: {
        actualCoords: [latitude, longitude],
        zoom: 17,
        mapCoords: [latitude, longitude]
      }
    });

    this.cleanLocationWatcher();

    points
      .getNearLocations({ latitude, longitude })
      .then(this.updatePointList.bind(this));
  };
  onError = error => {
    console.log(error);
  };
  componentWillUnmount() {
    this.cleanLocationWatcher();
  }

  updatePointList(positions) {
    try {
      const mappedList = locationHelpers.mapGeoPoint(positions);

      console.log(mappedList);
      this.setState({
        greenPoints: mappedList,
        isLoading: false
      });
    } catch (error) {
      console.log(error);
    }
  }

  cleanLocationWatcher() {
    this.geo.clearWatch(this.watcher);
    this.geo = null;
    this.watcher = null;
  }
}

export default SimpleMapContainer;
