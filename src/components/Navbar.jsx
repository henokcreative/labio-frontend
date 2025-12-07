import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src="/assets/logo.svg" alt="Labio Logo" className="logo" />
      </Link>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        {/* <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link> */}
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        {/* <Link to="/photos" onClick={() => setIsOpen(false)}>Photos</Link>
        <Link to="/web-design" onClick={() => setIsOpen(false)}>Web Design</Link>
        <Link to="/videos" onClick={() => setIsOpen(false)}>Videos</Link> */}
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;