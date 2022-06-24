import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

import "./styles/NavMenu.css";

export default function NavMenu({ navBarOpen, setNavBarOpen }) {
  return (
    <div className="dropdown">
      <ul className={`dropdown-left ${navBarOpen ? "showIcon" : ""}`}>
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
      <div className="dropdown-right-out">
        <ul className={`dropdown-right ${navBarOpen ? "showIcon" : ""}`}>
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
  );
}
