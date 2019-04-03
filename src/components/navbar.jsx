import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Navbar
        <span className="badge badge-secondary">{totalCounters}</span>
      </span>
    </nav>
  );
};
export default NavBar;
