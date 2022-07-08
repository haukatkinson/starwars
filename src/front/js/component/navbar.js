import React from "react";
import { Link } from "react-router-dom";
import logo from "./star_wars_logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img src={logo} className="logo"></img>
        </Link>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">Favorites</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
