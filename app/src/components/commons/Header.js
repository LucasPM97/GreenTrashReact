import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="jumbotron">
      <NavLink to={"/"} activeClassName="active">
        Home
      </NavLink>
      |
      <NavLink to={"/contact"} activeClassName="active">
        Contact
      </NavLink>
      |
      <NavLink to={"/about"} activeClassName="active">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
