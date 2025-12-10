import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">


        <Link
          className="footer-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src="/assets/logo.svg" alt="Labio Logo" className="footer-logo-img" />
        </Link>


        {/* <h3>Labio Creative Studio</h3> */}
        {/* <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul> */}

        {/* <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div> */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Labio Creative Studio. All rights reserved.
        </p>
      </div>


    </footer>
  );
};

export default Footer;