import React from "react";
import "./Hero.css";

const Hero = ({ title, heading, subheading, subtitle, ctaText, ctaLink }) => {

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
        <h1 className="display-3">{title}</h1>
        <h5 className="mt-0 mb-4 display-6">{heading}</h5>
        <p className="lead mt-4">{subheading}</p>
        <p className="mt-0 fw-bold">{subtitle}</p>

        {ctaText && ctaLink && (
          <a href={ctaLink} onClick={smoothScroll} className="btn btn-primary">
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default Hero;