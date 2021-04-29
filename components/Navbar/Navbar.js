import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => (
  <nav>
    <ul className={styles.navWrapper}>
      <li className={styles.navItem}>
        <NavLink exact activeClassName={styles.navItemActive}>
          home
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
