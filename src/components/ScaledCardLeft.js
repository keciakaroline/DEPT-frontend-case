import React from "react";
import btnDot from "./styles/design/btn-dot.svg";
import "./styles/ScaledCardLeft.css";

export default function ScaledCardLeft() {
  return (
    <div className="cardLeft-out">
      <div className="cardLeft">
        <p className="cardLeft-brand">FLORENSIS</p>
        <h2 className="cardLeft-title">
          Rethinking the entire online ecosystem
        </h2>
        <div className="read-more">
          <img
            src={btnDot}
            className="btnDot"
            alt="dot symbol in front of 'read more'"
          />
          <a href="/">Read more</a>
        </div>
      </div>
      <div className="cardLeft-info-out">
        <div className="cardLeft-info">
          <div className="cardLeft-info-one">
            <p className="cardLeft-info-one-brand">MICROSOFT</p>
            <h2 className="cardLeft-info-one-title">
              Tapping into Ireland’s unique gaming culture and bringing a fresh
              flavour to their Xbox social media channels
            </h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </div>
          <div className="cardLeft-info-two">
            <p className="cardLeft-info-two-brand">O’NEILL</p>
            <h2 className="cardLeft-info-two-title">
              Integrating existing content into O’Neills’s new e-commerce
              platform
            </h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </div>
          <div className="cardLeft-info-three">
            <p className="cardLeft-info-three-brand">MICROSOFT</p>
            <h2 className="cardLeft-info-three-title">
              Tapping into Ireland’s unique gaming culture and bringing a fresh
              flavour to their Xbox social media channels
            </h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
