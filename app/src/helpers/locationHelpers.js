import { computeDestinationPoint } from "geolib";

class LocationHelper {
  getZoneBoundsByCoords(latitude, longitude, distance) {
    const locationBoundTop = computeDestinationPoint(
      { latitude, longitude },
      distance,
      0
    );
    const locationBoundBottom = computeDestinationPoint(
      { latitude, longitude },
      distance,
      180
    );

    const locationBoundLeft = computeDestinationPoint(
      { latitude, longitude },
      distance,
      90
    );
    const locationBoundRigth = computeDestinationPoint(
      { latitude, longitude },
      distance,
      270
    );

    return {
      bottom: locationBoundBottom,
      left: locationBoundLeft,
      rigth: locationBoundRigth,
      top: locationBoundTop
    };
  }

  mapGeoPoint(points) {
    return points.map((point, index) => {
      return {
        coords: [point.coordinates.latitude, point.coordinates.longitude],
        id_point: point.id,
        type: point.type
      };
    });
  }
}

export default new LocationHelper();
