import firebase from "firebase";

class PointsApi {
  async getAllLocations() {
    try {
      const db = firebase.firestore();

      const response = await db.collection("basic_locations").get();

      return response.docs.map(x => {
        return { ...x.data(), id_point: x.id };
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getNearLocations(topCoords, leftCoords, bottomCoords, rightCoords) {
    try {
      const db = firebase.firestore();

      const response = await db
        .collection("basic_locations")
        .where("", "<=", topCoords.latitude)
        .where("", ">=", bottomCoords.latitude)
        .where("", "<=", leftCoords.longitude)
        .where("", "<=", rightCoords.longitude)
        .get();

      return response.docs.map(x => {
        return { ...x.data(), id_point: x.id };
      });
    } catch (error) {
      console.log(error);
    }
  }

  async addPointLocations(pointList) {
    const db = firebase.firestore();

    const collectionPointsRef = db.collection("green_points");

    var batch = db.batch();

    pointList.forEach(point => {
      let newPointDocRef = collectionPointsRef.doc();

      batch.set(newPointDocRef, {
        ...point,
        type: "greenPoint"
      });
    });

    await batch.commit();
  }

  async addBellLocations(bellList) {
    const db = firebase.firestore();

    const collectionBellsRef = db.collection("green_bells");

    var batch = db.batch();

    bellList.forEach(bell => {
      let newBellDocRef = collectionBellsRef.doc();

      batch.set(newBellDocRef, {
        ...bell,
        type: "bells"
      });
    });

    await batch.commit();
  }
}

export default new PointsApi();
