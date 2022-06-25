import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Footer.css";
import DeptLogo from "./styles/design/DEPT-LOGO-White.svg";
import ArrowUp from "./styles/design/arrow-up.svg";

export default function Footer() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer-content">
        <span className="footer-logo">
          <img src={DeptLogo} alt="DEPT logo white"></img>
        </span>
        <ul className="footer-menu">
          <li>
            <NavLink
              exact
              to="/"
              className="footer-menu-link"
              activeClassName="active"
            >
              WORK
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="footer-menu-link"
              activeClassName="active"
            >
              SERVICES
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="footer-menu-link"
              activeClassName="active"
            >
              STORIES
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="footer-menu-link"
              activeClassName="active"
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/"
              className="footer-menu-link"
              activeClassName="active"
            >
              CAREERS
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/contact"
              className="footer-menu-link"
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
        <div className="arrow-up">
          <img src={ArrowUp} alt="" onClick={goToTop}></img>
          <p>TOP</p>
        </div>
      </div>
    </div>
  );
}
