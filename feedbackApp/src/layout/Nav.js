import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const navs = [
  { path: "/", name: "Home" },
  { path: "/login", name: "Login" },
  { path: "/activity", name: "Activity" },
];

const Nav = () => (
  <nav className=" grid bg-white p-4 grid-cols-1 sm:grid-cols-2">
    <div className="col-span-1">
      <label className="Title">
        <b>
          Feedback<span id="AppText">App</span>
        </b>
      </label>
    </div>
    <div className="grid sm:justify-items-end mt-4 sm:mt-0 sm:pr-4">
      <ul className="flex space-x-2 sm:space-x-6 col-span-1">
        {navs.map((navItem) => (
          <li className="text-gray-300" key={navItem.path}>
            <NavLink
              exact
              to={navItem.path}
              activeClassName="text-black NavLink"
            >
              {navItem.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Nav;
