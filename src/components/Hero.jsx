import React from "react";
import "./Hero.css";

const Hero = ({ title, subheading, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <h4>{subheading}</h4>
        <p>{subtitle}</p>
        {ctaText && ctaLink && (
          <a href={ctaLink} className="hero-btn">{ctaText}</a>
        )}
      </div>
    </section>
  );
};

export default Hero;
