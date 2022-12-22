import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Menu = () => {
  return (
    <>
      <div class="d-flex justify-content-evenly mt-3 mb-3">
        <NavLink exact activeClassName="active_class" to="/home">
          <Button variant="primary">Home</Button>
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/mess">
          <Button variant="primary">Mess</Button>
        </NavLink>
        <NavLink exact activeClassName="active_class" to="/vendors">
          <Button variant="primary">Vendors</Button>
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
