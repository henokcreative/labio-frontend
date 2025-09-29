// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock scrolling when menu open
  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="labio-navbar">
      <div className="labio-nav-inner">
        <Link to="/" className="labio-logo" onClick={close}>
          Labio
        </Link>

        <nav
          className={`labio-nav-links ${open ? "open" : ""}`}
          aria-hidden={!open && window.innerWidth < 769}
          id="main-navigation"
        >
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/about" onClick={close}>About</Link>
          <Link to="/photos" onClick={close}>Photos</Link>
          <Link to="/web-design" onClick={close}>Web Design</Link>
          <Link to="/videos" onClick={close}>Videos</Link>
          <Link to="/contact" onClick={close}>Contact</Link>
        </nav>

        <button
          className={`labio-hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="main-navigation"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* overlay behind the menu on mobile */}
      <div
        className={`labio-nav-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
    </header>
  );
}