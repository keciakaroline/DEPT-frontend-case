import React from "react";
import Carousel from "react-bootstrap/Carousel";

import { imagesSet5 } from "./ClientCardData";
import { imagesSet6 } from "./ClientCardData";
import btnDot from "./styles/design/btn-dot.svg";
import "./styles/ClientCard3.css";

export default function ClientCard3() {
  return (
    <div className="client-cards-out">
      <Carousel fade={true} pause={false} className="client-card-set-one">
        <Carousel.Item interval={2000}>
          <img
            className="img-set-one"
            src={imagesSet5[0].img}
            alt="Two man writing in the whiteboard"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet5[0].brand}</p>
            <h2 className="title">{imagesSet5[0].title}</h2>
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
            src={imagesSet5[1].img}
            alt="Books over each other"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet5[1].brand}</p>
            <h2 className="title">{imagesSet5[1].title}</h2>
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
            src={imagesSet6[0].img}
            alt="Some servers computers"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet6[0].brand}</p>
            <h2 className="title">{imagesSet6[0].title}</h2>
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
            src={imagesSet6[1].img}
            alt="Different kinds of protein drinks and yogurt"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet6[1].brand}</p>
            <h2 className="title">{imagesSet6[1].title}</h2>
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
            src={imagesSet5[0].img}
            alt="People playing in the water"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet5[0].brand}</p>
            <h2 className="title">{imagesSet5[0].title}</h2>
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
            src={imagesSet5[1].img}
            alt="People speaking about numbers"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet5[1].brand}</p>
            <h2 className="title">{imagesSet5[1].title}</h2>
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
          <img className="img-set-three" src={imagesSet6[0].img} alt="Lamps" />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet6[0].brand}</p>
            <h2 className="title">{imagesSet6[0].title}</h2>
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
            src={imagesSet6[1].img}
            alt="Girl looking to a picture at the wall"
          />
          <Carousel.Caption className="legends">
            <p className="brand">{imagesSet6[1].brand}</p>
            <h2 className="title">{imagesSet6[1].title}</h2>
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
