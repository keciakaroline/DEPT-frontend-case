import React from "react";
import Carousel from "react-bootstrap/Carousel";

import btnDot from "./styles/design/btn-dot.svg";
import "./styles/ClientCard.css";

export default function ClientCard({ firstImageSet, secondImageSet }) {
  return (
    <div className="client-cards-out">
      <Carousel fade={false} pause={false} className="client-card-set-one">
        <Carousel.Item interval={2000}>
          <img
            className="img-set-one"
            src={firstImageSet[0].img}
            alt={firstImageSet[0].alt}
          />
          <Carousel.Caption className="legends">
            <p className="brand">{firstImageSet[0].brand}</p>
            <h2 className="title">{firstImageSet[0].title}</h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="img-set-one"
            src={firstImageSet[1].img}
            alt={firstImageSet[1].alt}
          />
          <Carousel.Caption className="legends">
            <p className="brand">{firstImageSet[1].brand}</p>
            <h2 className="title">{firstImageSet[1].title}</h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Carousel pause={false} fade={false} className="client-card-set-two">
        <Carousel.Item interval={2000}>
          <img
            className="img-set-two"
            src={secondImageSet[0].img}
            alt={secondImageSet[0].alt}
          />
          <Carousel.Caption className="legends">
            <p className="brand">{secondImageSet[0].brand}</p>
            <h2 className="title">{secondImageSet[0].title}</h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="img-set-two"
            src={secondImageSet[1].img}
            alt={secondImageSet[1].alt}
          />
          <Carousel.Caption className="legends">
            <p className="brand">{secondImageSet[1].brand}</p>
            <h2 className="title">{secondImageSet[1].title}</h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Carousel fade={false} pause={false} className="carousel-mobile">
        <Carousel.Item interval={2000}>
          <img
            className="img-set-three"
            src={firstImageSet[0].img}
            alt={firstImageSet[0].alt}
          />
          <Carousel.Caption className="legends">
            <p className="brand">{firstImageSet[0].brand}</p>
            <h2 className="title">{firstImageSet[0].title}</h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="img-set-three"
            src={firstImageSet[1].img}
            alt={firstImageSet[1].alt}
          />
          <Carousel.Caption className="legends">
            <p className="brand">{firstImageSet[1].brand}</p>
            <h2 className="title">{firstImageSet[1].title}</h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="img-set-three"
            src={secondImageSet[0].img}
            alt={secondImageSet[0].alt}
          />
          <Carousel.Caption className="legends">
            <p className="brand">{secondImageSet[0].brand}</p>
            <h2 className="title">{secondImageSet[0].title}</h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="img-set-three"
            src={secondImageSet[1].img}
            alt={secondImageSet[1].alt}
          />
          <Carousel.Caption className="legends">
            <p className="brand">{secondImageSet[1].brand}</p>
            <h2 className="title">{secondImageSet[1].title}</h2>
            <div className="read-more">
              <img
                src={btnDot}
                className="btnDot"
                alt="dot symbol in front of 'read more'"
              />
              <a href="/">Read more</a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
