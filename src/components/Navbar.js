import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";

import "./styles/Navbar.css";
import DeptLogo from "./styles/design/DEPT-LOGO-White.svg";
import deptLogoBlack from "./styles/design/DEPT-LOGO-Black.svg";
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

  const showMenu = () => {
    <NavMenu />;
  };

  return (
    <>
      <nav className="navbar">
        <span className="nav-logo">
          <img src={DeptLogo} alt="DEPT logo white"></img>
        </span>
        <div className="nav-menu-out">
          <ul
            className={`nav-menu ${
              navBarOpen
                ? "showMenu"
                : // <NavMenu
                  //   navBarOpen={navBarOpen}
                  //   setNavBarOpen={setNavBarOpen}
                  // />
                  ""
            }`}
          >
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
                to="/contact"
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
                  <img src={menuX} alt="x symbol"></img>
                ) : (
                  <img src={menuDot} alt="three dots symbol"></img>
                )}
              </button>
            </li>
          </ul>
          {/* <NavMenu navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} /> */}
        </div>
      </nav>

      <nav className="navbar-for-mobile">
        <span className="nav-logo">
          <img src={deptLogoBlack} alt="DEPT logo black"></img>
        </span>
        <div className="nav-menu-out">
          <ul
            className={`nav-menu ${
              navBarOpen
                ? "showMenu"
                : // <NavMenu
                  //   navBarOpen={navBarOpen}
                  //   setNavBarOpen={setNavBarOpen}
                  // />
                  ""
            }`}
          >
            MENU
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
                to="/contact"
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
                  <h2> MENU</h2>
                ) : (
                  <img src={menuDot} alt="three dots symbol"></img>
                )}
              </button>
            </li>
          </ul>
          {/* <NavMenu navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} /> */}
        </div>
      </nav>
    </>
  );
}
