import React from "react";
import "./Hero.css";

const Hero = ({
  title,
  heading,
  subheading,
  subtitle,
  ctaText,
  ctaLink,
  affiliates = []   // 👈 default empty array
}) => {

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
          <a href={ctaLink} onClick={smoothScroll} className="btn btn-brand mt-4">
            {ctaText}
          </a>
        )}

        {/* 👇 Only render if affiliates exist */}
        {affiliates.length > 0 && (
          <div className="affiliates ">
            {affiliates.map((partner, index) => (
              <a
                key={index}
                href={partner.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="aff-logo"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="aff-logo-img"
                />
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;