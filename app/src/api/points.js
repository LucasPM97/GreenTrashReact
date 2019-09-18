import firebase from "firebase";
import { GeoFirestore } from "geofirestore";
class PointsApi {
  async getNearLocations({ latitude, longitude }) {
    console.log({ latitude, longitude });
    try {
      const db = firebase.firestore();

      const geofirestore = new GeoFirestore(db);

      // Create a GeoCollection reference
      const geocollection = geofirestore.collection("basic_locations");

      // Create a GeoQuery based on a location
      const query = geocollection.near({
        center: new firebase.firestore.GeoPoint(latitude, longitude),
        radius: 1000
      });

      // Get query (as Promise)
      query.get().then(value => {
        console.log(value.docs); // All docs returned by GeoQuery
      });
    } catch (error) {
      console.log(error);
    }
  }

  async addPointLocations(pointList) {
    const db = firebase.firestore();

    const geofirestore = new GeoFirestore(db);

    const collectionPointsRef = db.collection("green_points");
    const collectionBasicPointsRef = geofirestore.collection("basic_locations");

    pointList.forEach((point, index) => {
      collectionPointsRef
        .add({
          ...point
        })
        .then(() => {
          try {
            console.log(`Data Points ${index + 1} de ${pointList.length}`);
          } catch (error) {
            console.log(error);
          }
        });

      collectionBasicPointsRef
        .add({
          coordinates: new firebase.firestore.GeoPoint(
            point.latitude,
            point.longitude
          ),
          type: "point"
        })
        .then(() => {
          try {
            console.log(`Geo Points ${index + 1} de ${pointList.length}`);
          } catch (error) {
            console.log(error);
          }
        });
    });
  }

  async addBellLocations(bellList) {
    const db = firebase.firestore();

    const geofirestore = new GeoFirestore(db);

    const collectionBellsRef = db.collection("green_bells");
    const collectionBasicPointsRef = geofirestore.collection("basic_locations");

    bellList.forEach((bell, index) => {
      collectionBellsRef
        .add({
          ...bell
        })
        .then(() => {
          try {
            console.log(`Data Bells ${index + 1} de ${bellList.length}`);
          } catch (error) {
            console.log(error);
          }
        });
      collectionBasicPointsRef
        .add({
          coordinates: new firebase.firestore.GeoPoint(
            bell.latitude,
            bell.longitude
          ),
          type: "bell"
        })
        .then(() => {
          try {
            console.log(`Geo Bells ${index + 1} de ${bellList.length}`);
          } catch (error) {
            console.log(error);
          }
        });
    });
  }
}

export default new PointsApi();
