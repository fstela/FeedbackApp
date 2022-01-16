import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const navs = [
  { path: "/", name: "Home" },
  { path: "/login", name: "Login" },
  { path: "/ActivityStudent", name: "Activity" },
];

const Nav = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const history = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    history.replace("/");
  };
  return (
    <nav className="grid bg-white p-4 grid-cols-1 sm:grid-cols-2">
      <div className="col-span-1">
        <label className="Title">
          <b>
            Feedback<span id="AppText">App</span>
          </b>
        </label>
      </div>
      <div className="grid sm:justify-items-end mt-4 sm:mt-0 sm:pr-4">
        <ul className="flex space-x-2 sm:space-x-6 col-span-1">
          {!isLoggedIn &&
            navs
              .filter((e) => e.name !== "Activity")
              .map((navItem) => (
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
          {isLoggedIn &&
            navs
              .filter((e) => e.name !== "Login")
              .map((navItem) => (
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
          {isLoggedIn &&
            navs
              .filter((e) => e.name === "Login")
              .map((navItem) => (
                <button className="text-red-400" onClick={logoutHandler}>
                  Log out
                </button>
              ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
