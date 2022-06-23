import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/NavMenu.css";

export default function NavMenu({ click, setClick }) {
  const handleClick = () => {
    setClick(!click);
  };

  const closeClick = () => {
    setClick(false);
  };
  // className={
  //   click ? (
  //     <img src={menuX} alt="menu x when opened"></img>
  //   ) : (
  //     <img src={menuDot} alt="menu dots when closed"></img>
  //   )
  // }
  return (
    <div className="dropdown">
      <div className="dropdown-left">
        <div className="dropdown-left-land">Landen</div>
        <a className="dropdown-left-item" activeClassName="active">
          GLOBAL
        </a>
        <a className="dropdown-left-item" activeClassName="active">
          NETHERLANDS
        </a>
        <a className="dropdown-left-item" activeClassName="active">
          UNITED STATES
        </a>
        <a className="dropdown-left-item" activeClassName="active">
          IRELAND
        </a>
        <a className="dropdown-left-item" activeClassName="active">
          UNITED KINGDOM
        </a>
        <a className="dropdown-left-item" activeClassName="active">
          DEUTSCHLAND
        </a>
        <a className="dropdown-left-item" activeClassName="active">
          SCHWEIZ
        </a>
      </div>
      <div className="dropdown-right">
        <li className="dropdown-right-item">
          <NavLink
            exact
            to="/"
            className="dropdown-right-link"
            onClick={click ? handleClick : null}
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
            onClick={click ? handleClick : null}
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
            onClick={click ? handleClick : null}
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
            onClick={click ? handleClick : null}
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
            onClick={click ? handleClick : null}
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
            onClick={click ? handleClick : null}
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
            onClick={click ? handleClick : null}
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
            onClick={click ? handleClick : null}
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
            onClick={click ? handleClick : null}
            activeClassName="active"
          >
            CONTACT
          </NavLink>
        </li>
      </div>
    </div>
  );
}
