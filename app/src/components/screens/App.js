import React from "react";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import Header from "../commons/Header";

function App() {
  const route = window.location.pathname;

  return (
    <div className="container-fluid">
      <Header />
      {getPath(route)}
    </div>
  );
}

function getPath(path) {
  switch (path) {
    case "/contact":
      return <ContactPage />;

    case "/about":
      return <AboutPage />;

    default:
      return <HomePage />;
  }
}

export default App;
