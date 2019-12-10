import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav class="navbar navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      Home
    </Link>
    <Link className="navbar-brand" to="/about">
      About
    </Link>
    <Link className="navbar-brand" to="/contact">
      Contact
    </Link>
  </nav>
);

export default Navbar;
