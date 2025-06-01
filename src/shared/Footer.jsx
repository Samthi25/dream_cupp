// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
//import cafeImage from '../assets/cafe.jpg'; // Update the path to your image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
      
        <div className="footer-left">
          <h3>Åpningstider</h3>
          <p>Mandag - Fredag: 08:00 - 18:00</p>
          <p>Lørdag: 10:00 - 16:00</p>
          <p>Søndag: Stengt</p>
        </div>
        
        <div className="footer-right">
            <h3>Adresse</h3>
            <address>
              Matcha og Mocha<br /><br />
              Nyveien 354<br /><br />
              1940 Bjørkelangen
            </address>
        </div>
      </div>
     </footer>
  );
};

export default Footer;
