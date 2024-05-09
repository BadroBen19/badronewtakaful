import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.png";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="nav">
        <a href="/">
          <img className="logo" src={logo} alt="home page" />
        </a>

        <div
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className={`nav__link ${isNavExpanded ? "show" : "hide"}`}>
          <a href="#">Services</a>
          <a href="#">About us</a>
          <a href="#">FAQs</a>
        </div>
      </nav>
    </header>
  );
}
