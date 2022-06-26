import React, { useState } from "react";
import {
  HorizontalMenu,
  HorizontalMenuMobile,
  NavMenu,
  NavMenuMobile,
} from "./NavMenu";

import "./styles/Navbar.css";
import DeptLogo from "./styles/design/DEPT-LOGO-White.svg";
import deptLogoBlack from "./styles/design/DEPT-LOGO-Black.svg";

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
      <div className={`navbar-wrapper ${navBarOpen ? "expanded" : ""}`}>
        <nav className="navbar">
          <span className="nav-logo">
            <img src={DeptLogo} alt="DEPT logo white"></img>
          </span>
          <div className="nav-menu-out">
            <HorizontalMenu
              handleClick={handleClick}
              navBarOpen={navBarOpen}
              closeMenu={closeMenu}
            />
          </div>
        </nav>
        <NavMenu navBarOpen={navBarOpen} setNavBarOpen={setNavBarOpen} />
      </div>

      <div
        className={`navbar-wrapper-for-mobile ${navBarOpen ? "expanded" : ""}`}
      >
        <nav className="navbar-for-mobile">
          <span className="nav-logo-mobile">
            {navBarOpen ? (
              <img
                src={DeptLogo}
                style={{
                  position: "relative",
                  width: "68px",
                  height: "25px",
                  right: "30px",
                }}
              />
            ) : (
              <img src={deptLogoBlack} />
            )}
          </span>
          <div className="nav-menu-out-for-mobile">
            <HorizontalMenuMobile
              handleClick={handleClick}
              navBarOpen={navBarOpen}
            />
          </div>
        </nav>
        <NavMenuMobile
          closeMenu={closeMenu}
          navBarOpen={navBarOpen}
          setNavBarOpen={setNavBarOpen}
        />
      </div>
    </>
  );
}
