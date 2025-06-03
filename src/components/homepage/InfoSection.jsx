import React from "react";
import { Link } from "react-router-dom";
import "./InfoSection.css";

const InfoSection = () => (
  <div className="info-grid">
    <div className="info-col">
      <div className="info-card">
        <h2>Velkommen til Matcha og Mocha</h2>
        <p>
          Hos Matcha og Mocha ønsker vi å skape mer enn bare en kopp kaffe - vi ønsker å gi deg en opplevelse. Midt i hjertet av byen finner du vårt lille, grønne pusterom hvor ro, smak og fellesskap står i sentrum.
          <br /><br />
          Vi er en lidenskapelig café som kombinerer det beste fra to verdener: den delikate, japanske matchaen og den klassiske, italienskinspirerte kaffen. Her finner du alt fra håndlagde matcha-latte til vår signaturdrikk "Drømmekoppen" – perfekt balansert og laget med kjærlighet.
          <br /><br />
          Matcha og Mocha er ikke bare et sted du besøker – det er et sted du kommer tilbake til. Enten du vil starte dagen med noe friskt, ta et møte over en cappuccino, eller bare nyte et rolig øyeblikk med noe søtt – vi har noe for deg.
        </p>
        <div className="info-btn-container">
          <Link to="/meny">
            <button className="info-btn">Meny Utvalg</button>
          </Link>
        </div>
      </div>
    </div>
    <div className="info-col">
      <img
        src={process.env.PUBLIC_URL + "/images/image1.jpg"}
        alt="Kafé interiør"
        className="info-card-img-outside"
      />
    </div>
  </div>
);

export default InfoSection;