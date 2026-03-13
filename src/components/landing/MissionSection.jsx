// src/components/landing/MissionSection.jsx
import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import BrandName from "../BrandName";

const MissionSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="reveal mission-section">
      <div className="container">
        <h2 className="gradient-text">Our Mission</h2>
        <p className="lead">
          <BrandName /> bridges the gap between scientific research and compelling visual storytelling.
          We empower researchers, scientists, and institutions to communicate complex ideas through
          stunning visuals, engaging videos, and innovative digital experiences that captivate audiences
          and drive meaningful impact.
        </p>
        <div className="mission-highlights">
          <div className="highlight-item">
            <div className="highlight-icon">🎯</div>
            <h4>Precision & Excellence</h4>
            <p>Every pixel and frame crafted with scientific accuracy</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🚀</div>
            <h4>Innovation First</h4>
            <p>Cutting-edge techniques for modern research communication</p>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🤝</div>
            <h4>Collaborative Approach</h4>
            <p>Working hand-in-hand with scientists to bring their vision to life</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;