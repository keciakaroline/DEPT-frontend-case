import React from "react";
import { NavLink } from "react-router-dom";
import NavMenu from "./NavMenu";

import "./styles/Navbar.css";
import DeptLogo from "./styles/design/DEPT-LOGO-White.svg";
import menuDot from "./styles/design/menu-dot.svg";
import menuX from "./styles/design/menu-x.svg";

export default function Navbar({ click, setClick }) {
  const handleClick = () => {
    setClick(!click);
  };

  const closeClick = () => {
    setClick(false);
  };

  return (
    <div className={click ? "main-container" : ""} onClick={() => closeClick()}>
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <span className="nav-logo">
            <img src={DeptLogo} alt="DEPT logo white"></img>
          </span>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                WORK
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                CULTURE
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                INSIGHTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                CAREERS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                onClick={click ? handleClick : null}
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <div
            onClick={handleClick}
            className={click ? "nav-dropdown active" : "nav-dropdown"}
          >
            {/* nao consigo colocar pra mostrar o x */}
            <img src={menuDot} alt="menu dots when closed"></img>
            <a>
              <NavMenu click={click} setClick={setClick} />
            </a>
            {/*             
            <i
              className={
                click ? (
                  <img src={menuDot} alt="menu dots when closed"></img>
                ) : (
                  <img src={menuX} alt="menu x when opened"></img>
                )
              }
            ></i> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
