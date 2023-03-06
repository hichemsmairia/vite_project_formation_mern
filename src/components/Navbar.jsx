import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <i className="fa fa-fw fa-home"></i> Home
      </Link>

      <Link to="/register">
        <i className="fa fa-fw fa-envelope"></i> Register
      </Link>

      <Link to="/login">
        <i className="fa fa-fw fa-user"></i> Login
      </Link>
    </div>
  );
}

export default Navbar;
