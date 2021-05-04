import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = () => (
  <nav>
    <ul >
      <li>
        <NavLink exact to="/home">home</NavLink>
      </li>
      <li>
        <NavLink exact to="/achievements">achievements</NavLink>
      </li>
      <li>
        <NavLink exact to="/shop">shop</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
