import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { imagesSet3 } from "./ClientCardData";
import { imagesSet4 } from "./ClientCardData";
import btnDot from "./styles/design/btn-dot.svg";
import "./styles/ClientCard2.css";

export default function ClientCard2() {
  return (
    <div className="client-cards-out">
      <Carousel fade={true} pause={false} className="client-card-set-one">
        <Carousel.Item interval={2000}>
          <img
            className="img-set-one"
            src={imagesSet3[0].img}
            alt="Lighting post"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet3[0].brand}</p>
            <h2 className="title">{imagesSet3[0].title}</h2>
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
            src={imagesSet3[1].img}
            alt="Cartoon of a boy holding a map"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet3[1].brand}</p>
            <h2 className="title">{imagesSet3[1].title}</h2>
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

      <Carousel pause={false} fade={true} className="client-card-set-two">
        <Carousel.Item interval={2000}>
          <img
            className="img-set-two"
            src={imagesSet4[0].img}
            alt="Man using headphones"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet4[0].brand}</p>
            <h2 className="title">{imagesSet4[0].title}</h2>
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
            src={imagesSet4[1].img}
            alt="Chocomel pictures"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet4[1].brand}</p>
            <h2 className="title">{imagesSet4[1].title}</h2>
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

      <Carousel fade={true} pause={false} className="carousel-mobile">
        <Carousel.Item interval={2000}>
          <img
            className="img-set-three"
            src={imagesSet3[0].img}
            alt="People playing in the water"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet3[0].brand}</p>
            <h2 className="title">{imagesSet3[0].title}</h2>
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
            src={imagesSet3[1].img}
            alt="People speaking about numbers"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet3[1].brand}</p>
            <h2 className="title">{imagesSet3[1].title}</h2>
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
          <img className="img-set-three" src={imagesSet4[0].img} alt="Lamps" />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet4[0].brand}</p>
            <h2 className="title">{imagesSet4[0].title}</h2>
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
            src={imagesSet4[1].img}
            alt="Girl looking to a picture at the wall"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet4[1].brand}</p>
            <h2 className="title">{imagesSet4[1].title}</h2>
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
