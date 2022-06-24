import React from "react";
import Footer from "./Footer";
import ClientList from "./ClientList";
import ClientCard from "./ClientCard";

export default function Homepage() {
  return (
    <div>
      Homepage
      <ClientCard />
      <ClientList />
      <Footer />
    </div>
  );
}
