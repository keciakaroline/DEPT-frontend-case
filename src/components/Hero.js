import React from "react";
import MovingComponent from "react-moving-text";

import img0 from "./styles/design/clients-card/image0.png";
import "./styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero-out">
      {/* <div className="hero-img"></div> */}
      <img src={img0} alt="" className="hero-img" />

      {/* <MovingComponent
        type="fadeOutToRight"
        duration="2000ms"
        delay="3s"
        direction="normal"
        timing="linear"
        iteration="1"
        fillMode="none"
        className="hero-title"
      >
        A selection of projects that <strong>pioneer tech</strong> and{" "}
        <strong>marketing</strong> to help brands stay ahead.
      </MovingComponent> */}
      <h1 className="hero-title">
        <span className="target-1">
          A selection of projects that <strong>pioneer tech</strong>
        </span>
        <span className="target-2">
          {" "}
          and <strong>marketing</strong> to help brands stay ahead.
        </span>
      </h1>

      <p className="hero-brand">WORK</p>
    </div>
  );
}
