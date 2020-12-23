import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div id="mySidenav" class="sidenav">
        <Link to="/">
          <li>Dashboard</li>
        </Link>
        <Link to="/first">
          <li>First</li>
        </Link>
        <Link to="/second">
          <li>Second</li>
        </Link>
        <Link to="/third">
          <li>Third</li>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
