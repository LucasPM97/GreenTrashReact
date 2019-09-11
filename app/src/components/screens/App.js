import React, { Component } from "react";
import Firebase from "firebase";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import Header from "../commons/Header";
import firebaseConfig from "../../utils/config";

class App extends Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(firebaseConfig);
  }

  render() {
    const route = window.location.pathname;

    return (
      <div className="container-fluid">
        <Header />
        {this.getPath(route)}
      </div>
    );
  }

  getPath(path) {
    switch (path) {
      case "/contact":
        return <ContactPage />;

      case "/about":
        return <AboutPage />;

      default:
        return <HomePage />;
    }
  }
}

export default App;
