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
      const query = await geocollection
        .near({
          center: new firebase.firestore.GeoPoint(latitude, longitude),
          radius: 0.5
        })
        .get();

      return query.docs.map(x => x.data());
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
        .then(document => {
          try {
            console.log(`Data Points ${index + 1} de ${pointList.length}`);
            collectionBasicPointsRef
              .add({
                coordinates: new firebase.firestore.GeoPoint(
                  point.latitude,
                  point.longitude
                ),
                type: "point",
                id: document.id
              })
              .then(() => {
                try {
                  console.log(`Geo Points ${index + 1} de ${pointList.length}`);
                } catch (error) {
                  console.log(error);
                }
              });
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
        .then(document => {
          try {
            console.log(`Data Bells ${index + 1} de ${bellList.length}`);
            collectionBasicPointsRef
              .add({
                coordinates: new firebase.firestore.GeoPoint(
                  bell.latitude,
                  bell.longitude
                ),
                type: "bell",
                id: document.id
              })
              .then(() => {
                try {
                  console.log(`Geo Bells ${index + 1} de ${bellList.length}`);
                } catch (error) {
                  console.log(error);
                }
              });
          } catch (error) {
            console.log(error);
          }
        });
    });
  }
}

export default new PointsApi();
