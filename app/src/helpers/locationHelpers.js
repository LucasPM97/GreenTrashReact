import { computeDestinationPoint } from "geolib";

class LocationHelper {
  getZoneBoundsByCoords(latitude, longitude) {
    const locationBoundTop = computeDestinationPoint(
      { latitude, longitude },
      1000,
      0
    );
    const locationBoundBottom = computeDestinationPoint(
      { latitude, longitude },
      1000,
      180
    );

    const locationBoundLeft = computeDestinationPoint(
      { latitude, longitude },
      1000,
      90
    );
    const locationBoundRigth = computeDestinationPoint(
      { latitude, longitude },
      1000,
      270
    );

    return {
      bottom: locationBoundBottom,
      left: locationBoundLeft,
      rigth: locationBoundRigth,
      top: locationBoundTop
    };
  }
}

export default new LocationHelper();
