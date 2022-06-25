import React from "react";
import Footer from "./Footer";
import ClientList from "./ClientList";
import ClientCard from "./ClientCard";
import ClientQuote from "./ClientQuote";
import FormContact from "./FormContact";
import ClientCard2 from "./ClientCard2";
import ClientCard3 from "./ClientCard3";
import Hero from "./Hero";
import Filter from "./Filter";
import ScaledCardLeft from "./ScaledCardLeft";
import ScaledCardRight from "./ScaledCardRight";

import "./styles/Homepage.css";

export default function Homepage() {
  return (
    <div className="homepage">
      <Hero />
      <Filter />
      <ClientCard />
      <ScaledCardLeft />
      <ClientCard2 />
      <ScaledCardRight />
      <ClientQuote />
      <ClientCard3 />
      <ClientList />
      <FormContact />
      <Footer />
    </div>
  );
}
