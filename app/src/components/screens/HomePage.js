import React, { Component } from "react";
import points from "../../api/points";
import greenBellList from "../../utils/data/green-bells";
import greenPointList from "../../utils/data/green-bells";
import SimpleMapContainer from "../commons/SimpleMapContainer";

class HomePage extends Component {
  state = {
    pointList: []
  };
  render() {
    return (
      <div>
        {/* <input
          value={"Upload Green Points"}
          type={"button"}
          onClick={this.uploadGreenPoints.bind(this)}
        />
        <input
          value={"Upload Green Bells"}
          type={"button"}
          onClick={this.uploadGreenBells.bind(this)}
        />
        <br />
        <br />
        <br /> */}
        <div style={{ display: "flex" }}>
          <SimpleMapContainer />
        </div>
      </div>
    );
  }

  async componentDidMount() {
    // const list = await point.getAllLocations();
    // console.log(list);
    // if (list != null) {
    //   alert(`List arrived with ${list.length} item`);
    //   this.setState({
    //     pointList: list
    //   });
    // }
  }

  paginate(array, page_size, page_number) {
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  async uploadGreenBells() {
    let bellIndex = 0;
    let paginatedBellArray = this.paginate(greenBellList, 50, bellIndex);

    while (paginatedBellArray.length > 0) {
      await points.addBellLocations(paginatedBellArray);
      console.log(
        `Hechos ${paginatedBellArray.length} de ${greenBellList.length}`
      );

      bellIndex += 1;
      paginatedBellArray = this.paginate(greenBellList, 50, bellIndex);
    }

    alert("Bells Completed");
  }
  async uploadGreenPoints() {
    let pointIndex = 0;
    let paginatedPointArray = this.paginate(greenPointList, 50, pointIndex);

    while (paginatedPointArray.length > 0) {
      await points.addPointLocations(paginatedPointArray);
      console.log(
        `Hechos ${paginatedPointArray.length} de ${greenPointList.length}`
      );

      pointIndex += 1;
      paginatedPointArray = this.paginate(greenPointList, 50, pointIndex);
    }

    alert("Points Completed");
  }
}

export default HomePage;
