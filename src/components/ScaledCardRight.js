import React from "react";
import btnDot from "./styles/design/btn-dot.svg";
import "./styles/ScaledCardRight.css";

export default function ScaledCardRight() {
  return (
    <div className="cardRight-out">
      <div className="cardRight-info-out">
        <div className="cardRight-info">
          <div className="cardRight-info-one">
            <div className="info-one">
              <p className="cardRight-info-one-brand">MICROSOFT</p>
              <h2 className="cardRight-info-one-title">
                Tapping into Ireland’s unique gaming culture and bringing a
                fresh flavour to their Xbox social media channels
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
          <div className="cardRight-info-two">
            <div className="info-two">
              <p className="cardRight-info-two-brand">O’NEILL</p>
              <h2 className="cardRight-info-two-title">
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
          </div>
          <div className="cardRight-info-three">
            <div className="info-three">
              <p className="cardRight-info-three-brand">MICROSOFT</p>
              <h2 className="cardRight-info-three-title">
                Tapping into Ireland’s unique gaming culture and bringing a
                fresh flavour to their Xbox social media channels
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
      <div className="cardRight">
        <p className="cardRight-brand">FLORENSIS</p>
        <h2 className="cardRight-title">
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
    </div>
  );
}
