import React from "react";

import "./styles/Hero.css";

export default function Hero() {
  return (
    <div className="hero-out">
      <span className="hero-img"></span>
      <h1 className="hero-title">
        <span className="target-1">
          A selection of projects that <strong>pioneer tech</strong> and{" "}
          <strong>marketing</strong> to help brands stay ahead.
        </span>
      </h1>

      <p className="hero-brand">WORK</p>
    </div>
  );
}
