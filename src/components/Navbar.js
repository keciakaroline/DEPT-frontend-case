import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";

import "./styles/Navbar.css";
import DeptLogo from "./styles/design/DEPT-LOGO-White.svg";
import menuDot from "./styles/design/menu-dot.svg";
import menuX from "./styles/design/menu-x.svg";

export default function Navbar() {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const handleClick = () => {
    setNavBarOpen(!navBarOpen);
  };

  const closeMenu = () => {
    setNavBarOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <span className="nav-logo">
          <img src={DeptLogo} alt="DEPT logo white"></img>
        </span>
        <div className="nav-menu-out">
          <ul className={`nav-menu ${navBarOpen ? "showMenu" : ""}`}>
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={() => closeMenu()}
                activeClassName="active"
              >
                WORK
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={() => closeMenu()}
                activeClassName="active"
              >
                CULTURE
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={() => closeMenu()}
                activeClassName="active"
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={() => closeMenu()}
                activeClassName="active"
              >
                INSIGHTS
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={() => closeMenu()}
                activeClassName="active"
              >
                CAREERS
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={() => closeMenu()}
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <button onClick={handleClick} className="btn-menu">
                {navBarOpen ? (
                  <img src={menuX} alt=""></img>
                ) : (
                  <img src={menuDot} alt=""></img>
                )}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
