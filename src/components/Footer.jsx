import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mb-0 ">
      <div className="footer-content mb-0">


        <div className="d-flex flex-column flex-md-row w-100 align-items-md-center justify-content-between flex-wrap">


          <div id="contactDetails" className="my-3">
            <h4 className="my-3 contact-heading text-md-start">contact</h4>
            <div className="text-md-start contact-item">
              E-mail:{" "}
              <a href="mailto:henok.karvonen@utu.fi" target="_blank" rel="noopener noreferrer">
                henok.karvonen@utu.fi
              </a>
            </div>
            <div className="contact-item text-md-start">Mobile: +358 45 6955689</div>
          </div>
          <div id="footerLogo" className="my-3">
            <Link
              className="footer-logo"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="/assets/logo.svg" alt="Labio Logo" className="footer-logo-img m-2" />
            </Link>
          </div>
        </div>


        {/* <ul className="footer-links m-0">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul> */}
      </div>

      {/* <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div> */}
      <p className="footer-copy w-100 text-center mt-5  pt-4">
        © {new Date().getFullYear()} Labio Media Creative Studio. All rights reserved.
      </p>



    </footer>
  );
};

export default Footer;