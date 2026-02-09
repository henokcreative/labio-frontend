// src/components/collabsSlider.jsx
import React from "react";
import "./slider.css";

const logos = [
  { src: "/assets/logos/tbc-logo.svg", url: "https://bioscience.fi" },
  { src: "/assets/logos/InFlames_logo.svg", url: "https://inflames.utu.fi" },
  { src: "/assets/logos/nms-logo.svg", url: "https://nordicmetsoc.org" },
  { src: "/assets/logos/BioCityLogoRGB.svg", url: "https://biocityturku.fi" },
  { src: "/assets/logos/initialise-logo.svg", url: "https://initialise-project.eu/" },

];

const collabsSlider = () => {
  const row = [...logos, ...logos]; // seamless loop

  return (
    <section className="collab-section">
      <h3 className="collab-title">Trusted by & Collaborating With</h3>

      <div className="collab-slider">
        {/* Top row */}
        <div className="slider-track left">
          {row.map((logo, i) => (
            <a
              key={`top-${i}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="slide"
              aria-label="Collaborator website"
            >
              <img className="p-2" src={logo.src} alt="Collaborator logo" />
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="slider-track right">
          {row.map((logo, i) => (
            <a
              key={`bottom-${i}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="slide"
              aria-label="Collaborator website"
            >
              <img className="p-2" src={logo.src} alt="Collaborator logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default collabsSlider;