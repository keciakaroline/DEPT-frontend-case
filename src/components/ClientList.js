import React from "react";
import "./styles/ClientList.css";
import google from "./styles/design/clients/image 72.png";
import spotify from "./styles/design/clients/image 74.png";
import adyen from "./styles/design/clients/image 71.png";
import tesla from "./styles/design/clients/image 73.png";
import levis from "./styles/design/clients/image 63.png";
import patagonia from "./styles/design/clients/image 65.png";
import audi from "./styles/design/clients/image 67.png";
import asos from "./styles/design/clients/image 69.png";
import netflix from "./styles/design/clients/image 64.png";
import fujitsu from "./styles/design/clients/image 66.png";
import triumph from "./styles/design/clients/image 68.png";
import takeaway from "./styles/design/clients/image 70.png";

export default function ClientList() {
  return (
    <div className="client-list">
      <div className="clients-intro-out">
        <div className="clients-intro">
          <h1>Clients</h1>
          <p>
            We value a great working relationship with our clients above all
            else. It’s why they often come to our parties. It’s also why we’re
            able to challenge and inspire them to reach for the stars.
          </p>
        </div>
      </div>
      <div className="clients-icon">
        <img src={google}></img>
        <img src={levis}></img>
        <img src={netflix}></img>
        <img src={spotify}></img>
        <img src={patagonia}></img>
        <img src={fujitsu}></img>
        <img src={adyen}></img>
        <img src={audi}></img>
        <img src={triumph}></img>
        <img src={tesla}></img>
        <img src={asos}></img>
        <img src={takeaway}></img>
      </div>
    </div>
  );
}
