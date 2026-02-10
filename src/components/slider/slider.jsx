// src/components/CollabsSlider.jsx
import React from "react";
import "./slider.css";

const logos = [
  { src: "/assets/logos/tbc-logo.svg", url: "https://bioscience.fi" },
  { src: "/assets/logos/InFlames_logo.svg", url: "https://inflames.utu.fi" },
  { src: "/assets/logos/nms-logo.svg", url: "https://nordicmetsoc.org" },
  { src: "/assets/logos/BioCityLogoRGB.svg", url: "https://biocityturku.fi" },
  { src: "/assets/logos/initialise-logo.svg", url: "https://initialise-project.eu/" },
];

const CollabsSlider = () => {
  const loop = [...logos, ...logos];

  return (
    <section className="collab-section">
      <h3 className="collab-title">Trusted by & Collaborating With</h3>

      <div className="collab-slider">
        <div className="slider-row left">
          {loop.map((logo, i) => (
            <a
              key={`left-${i}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="slide"
            >
              <img src={logo.src} alt="Collaborator logo" />
            </a>
          ))}
        </div>

        <div className="slider-row right">
          {loop.map((logo, i) => (
            <a
              key={`right-${i}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="slide"
            >
              <img src={logo.src} alt="Collaborator logo" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollabsSlider;