import React from "react";

import img0 from "./styles/design/clients-card/image0.png";
import "./styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero-out">
      <img src={img0} alt="" className="hero-img" />
      <h1 className="hero-title">
        <span className="target-1">
          A selection of projects that <strong>pioneer tech</strong> and{" "}
          <strong>marketing</strong> to help brands stay ahead.
        </span>
        {/* <span className="target-2"> */}
        {/* </span> */}
      </h1>

      <p className="hero-brand">WORK</p>
    </div>
  );
}
