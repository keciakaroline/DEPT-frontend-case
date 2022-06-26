import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import menuDot from "./styles/design/menu-dot.svg";
import menuX from "./styles/design/menu-x.svg";
import "./styles/NavMenu.css";

export function HorizontalMenu({ closeMenu, handleClick, navBarOpen }) {
  return (
    <ul
      className={`nav-menu`}
    >
      <li style={{"visibility": navBarOpen ? "hidden" : "inherit"}}>
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
      <li style={{"visibility": navBarOpen ? "hidden" : "inherit"}}>
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
      <li style={{"visibility": navBarOpen ? "hidden" : "inherit"}}>
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
      <li style={{"visibility": navBarOpen ? "hidden" : "inherit"}}>
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
      <li style={{"visibility": navBarOpen ? "hidden" : "inherit"}}>
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
      <li style={{"visibility": navBarOpen ? "hidden" : "inherit"}}>
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
  );
}

export default function NavMenu({ navBarOpen, setNavBarOpen }) {
  return (
      <>
        {navBarOpen ? (
          <div className="big-menu-wrapper">
            <div className="dropdown-left">
              <ul>
                <div className="dropdown-left-land">Landen</div>
                <li className="dropdown-left-item" activeClassName="active">
                  GLOBAL
                </li>
                <li className="dropdown-left-item" activeClassName="active">
                  NETHERLANDS
                </li>
                <li className="dropdown-left-item" activeClassName="active">
                  UNITED STATES
                </li>
                <li className="dropdown-left-item" activeClassName="active">
                  IRELAND
                </li>
                <li className="dropdown-left-item" activeClassName="active">
                  UNITED KINGDOM
                </li>
                <li className="dropdown-left-item" activeClassName="active">
                  DEUTSCHLAND
                </li>
                <li className="dropdown-left-item" activeClassName="active">
                  SCHWEIZ
                </li>
              </ul>
            </div>
            <div className="dropdown-right">
              <ul>
                <li className="dropdown-right-item">
                  <NavLink
                    exact
                    to="/"
                    className="dropdown-right-link"
                    // onClick={() => closeMenu()}
                    activeClassName="active"
                  >
                    HOME
                  </NavLink>
                </li>
                <li className="dropdown-right-item">
                  <NavLink
                    exact
                    to="/"
                    className="dropdown-right-link"
                    // onClick={() => closeMenu()}
                    activeClassName="active"
                  >
                    WORK
                  </NavLink>
                </li>
                <li className="dropdown-right-item">
                  <NavLink
                    exact
                    to="/"
                    className="dropdown-right-link"
                    // onClick={() => closeMenu()}
                    activeClassName="active"
                  >
                    CULTURE
                  </NavLink>
                </li>
                <li className="dropdown-right-item">
                  <NavLink
                    exact
                    to="/"
                    className="dropdown-right-link"
                    // onClick={() => closeMenu()}
                    activeClassName="active"
                  >
                    SERVICES
                  </NavLink>
                </li>
                <li className="dropdown-right-item">
                  <NavLink
                    exact
                    to="/"
                    className="dropdown-right-link"
                    // onClick={() => closeMenu()}
                    activeClassName="active"
                  >
                    PARTNERS
                  </NavLink>
                </li>
                <li className="dropdown-right-item">
                  <NavLink
                    exact
                    to="/"
                    className="dropdown-right-link"
                    // onClick={() => closeMenu()}
                    activeClassName="active"
                  >
                    STORIES
                  </NavLink>
                </li>
                <li className="dropdown-right-item">
                  <NavLink
                    exact
                    to="/"
                    className="dropdown-right-link"
                    // onClick={() => closeMenu()}
                    activeClassName="active"
                  >
                    CAREERS
                  </NavLink>
                </li>
                <li className="dropdown-right-item">
                  <NavLink
                    exact
                    to="/"
                    className="dropdown-right-link"
                    // onClick={() => closeMenu()}
                    activeClassName="active"
                  >
                    EVENTS
                  </NavLink>
                </li>
                <li className="dropdown-right-item">
                  <NavLink
                    exact
                    to="/"
                    className="dropdown-right-link"
                    // onClick={() => closeMenu()}
                    activeClassName="active"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </>
  );
}
