import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Footer.css";
import DeptLogo from "./styles/design/DEPT-LOGO-White.svg";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <img src={DeptLogo} alt="DEPT logo white" className="footer-logo"></img>

        <ul className="footer-menu">
          <li>
            <NavLink
              exact
              to="/"
              className="nav-menu-link"
              activeClassName="active"
            >
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="nav-menu-link"
              activeClassName="active"
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="nav-menu-link"
              activeClassName="active"
            >
              STORIES
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="nav-menu-link"
              activeClassName="active"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="nav-menu-link"
              activeClassName="active"
            >
              CAREERS
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="nav-menu-link"
              activeClassName="active"
            >
              CONTACT
            </NavLink>
          </li>
        </ul>

        <hr />

        <div>
          <div className="footer-infos">
            <div>Chamber of Commerce: 63464101 </div>
            <div>VAT: NL 8552.47.502.B01</div>
            <div>Terms and conditions</div>
          </div>
          <div className="copyright">2022 Dept Agency</div>
        </div>
      </div>
    </div>
  );
}
