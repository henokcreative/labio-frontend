import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {ctaText && ctaLink && (
          <a href={ctaLink} className="hero-btn">{ctaText}</a>
        )}
      </div>
    </section>
  );
};

export default Hero;