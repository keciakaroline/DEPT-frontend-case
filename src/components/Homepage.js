import React from "react";
import Footer from "./Footer";
import ClientList from "./ClientList";
import ClientCard from "./ClientCard";
import ClientQuote from "./ClientQuote";
import Form from "./Form";

export default function Homepage() {
  return (
    <div>
      Homepage
      <ClientCard />
      <ClientQuote />
      <ClientList />
      <Form />
      <Footer />
    </div>
  );
}
