//Dependencies
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

//CSS

const Navbar = (props) => {
  return (
    <>
      <nav>
        <NavLink to="/page1">Page 1</NavLink>
        <NavLink to="/page2">Page 2</NavLink>
        <NavLink to="/page3">Page 3</NavLink>
        <NavLink to="/page4">Page 4</NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
