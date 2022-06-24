import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import { imagesSet1 } from "./ClientCardData";
import { imagesSet2 } from "./ClientCardData";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/ClientList.css";

export default function ClientCard() {
  return (
    <div className="client-cards-out">
      <div className="client-card-set-one">
        <Carousel fade={true}>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-50"
              src={imagesSet1[0].img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-50"
              src={imagesSet1[1].img}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="client-card-set-two">
        <Carousel fade={true}>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-50"
              src={imagesSet2[0].img}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-50"
              src={imagesSet2[1].img}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
