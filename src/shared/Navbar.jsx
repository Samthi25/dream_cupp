import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="brand-title">Matcha og Mocha</div>
      <button className="toggle-button" onClick={handleToggle} aria-label="Toggle menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`main-links${menuOpen ? " active" : ""}`}>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>
            HJEM
          </NavLink>
        </li>
        <li>
          <NavLink to="/meny" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>
            MENY
          </NavLink>
        </li>
        <li>
          <NavLink to="/drommekoppen" className={({ isActive }) => isActive ? "active" : ""} onClick={handleLinkClick}>
            DRØMMEKOPPEN
          </NavLink>
        </li>
      </ul>
      <div className="nav-right">
        <NavLink to="/login" className="login-button" onClick={handleLinkClick}>
          LOGIN
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;