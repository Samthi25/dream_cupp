import React from "react";
import {Link} from "react-router-dom";

const DreamCupCard = () => (
  <div className="info-grid">
    <div className ="info-col">
      <img src={process.env.PUBLIC_URL + "/images/image8.jpg"}
      alt="location" className="info-card-img-outside" />
    </div>
    <div className="info-col">
      <div className="info-card">
      <h2>Drømmekoppen</h2>
      <p>
        Lag din egen favorittdrikk med Drømmekoppen!<br />
        Velg ingredienser i sanntid og se koppen fylle seg opp.<br />
        Gled deg til en unik interaktiv opplevelse
      </p>
      <div className="info-btn-container">
        <Link to="/drommekoppen">
          <button className="info-btn">Prøv Drømmekoppen</button>
        </Link>
      </div>
      </div>
    </div>
  </div>
);

export default DreamCupCard;

