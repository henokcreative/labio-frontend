import React from "react";
import "./Hero.css";

const Hero = ({ title, subheading, subtitle, ctaText, ctaLink }) => {

  const smoothScroll = (e) => {
    e.preventDefault();
    const target = document.querySelector(ctaLink);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{title}</h1>
        <h4>{subheading}</h4>
        <p>{subtitle}</p>

        {ctaText && ctaLink && (
          <a href={ctaLink} onClick={smoothScroll} className="btn button">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;