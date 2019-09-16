import React, { Component } from "react";
import Firebase from "firebase";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import Header from "../commons/Header";
import firebaseConfig from "../../utils/config";
import { Route } from "react-router-dom";

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
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/about" component={AboutPage} />
      </div>
    );
  }
}

export default App;
