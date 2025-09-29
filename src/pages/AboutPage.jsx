// src/pages/AboutPage.jsx
import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Labio Creative Studio</h1>
        <p>
          We provide digital print, photography, videography, and web
          development services for small businesses. Our goal is to help you
          create visually stunning and interactive digital experiences.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Digital Print Design</li>
          <li>Photography & Videography</li>
          <li>Website Development</li>
          <li>Branding & Creative Consulting</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet the Team</h2>
        <p>Our creative professionals combine expertise in design, tech, and media.</p>
      </section>
    </div>
  );
}

export default AboutPage;