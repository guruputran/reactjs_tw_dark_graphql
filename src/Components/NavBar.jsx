/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="dark:text-yellow-300 container flex">
          <div className="logo">
            <a href="/">
              <h1>COCKTAIL APP</h1>
            </a>
          </div>
          <ul className="flex flex-end p-2">
            <li className="p-1">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="p-1">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="p-1">
              <NavLink to="/products">Products</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
