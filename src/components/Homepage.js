import React from "react";
import Footer from "./Footer";
import ClientList from "./ClientList";
import ClientCard from "./ClientCard";
import ClientQuote from "./ClientQuote";
import FormContact from "./FormContact";

import Hero from "./Hero";
import Filter from "./Filter";
import ScaledCardLeft from "./ScaledCardLeft";
import ScaledCardRight from "./ScaledCardRight";

import "./styles/Homepage.css";
import {
  imagesSet1,
  imagesSet2,
  imagesSet3,
  imagesSet4,
  imagesSet5,
  imagesSet6,
} from "./ClientCardData";

export default function Homepage() {
  return (
    <div className="homepage">
      <Hero />
      <Filter />
      <ClientCard firstImageSet={imagesSet1} secondImageSet={imagesSet2} />
      <ScaledCardLeft />
      <ClientCard firstImageSet={imagesSet3} secondImageSet={imagesSet4} />
      <ScaledCardRight />
      <ClientQuote />
      <ClientCard firstImageSet={imagesSet5} secondImageSet={imagesSet6} />
      <ClientList />
      <FormContact />
      <Footer />
    </div>
  );
}
