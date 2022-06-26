import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Footer.css";
import DeptLogo from "./styles/design/DEPT-LOGO-White.svg";
import ArrowUp from "./styles/design/arrow-up.svg";
import facebook from "./styles/design/facebook.png";
import twitter from "./styles/design/twitter.png";
import instagram from "./styles/design/instagram.png";

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
          <div className="copyright">© 2022 Dept Agency</div>
        </div>
        <div className="arrow-up">
          <img src={ArrowUp} alt="" onClick={goToTop}></img>
          <p>TOP</p>
        </div>

        <div className="for-mobile-socials">
          <div className="facebook">
            <a
              href="https://www.facebook.com/DeptAgency/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={facebook} alt="facebook symbol" />{" "}
            </a>
          </div>
          <div className="twitter">
            <a
              href="https://twitter.com/deptagency?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="twitter symbol" />
            </a>
          </div>
          <div className="instagram">
            <a
              href="https://www.instagram.com/deptagency/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="instagram symbol" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
