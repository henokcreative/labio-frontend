// src/pages/LandingPage.jsx
import React from "react";
import "./LandingPage.css"; 


function LandingPage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>Welcome to Labio Creative Studio</h1>
          <p>Digital Print • Photography • Videography • Web Development</p>
          <button className="hero-btn">View Our Work</button>
        </div>
      </header>

      <section className="gallery">
        <h2>Featured Projects</h2>
        <div className="gallery-grid">
          <div className="gallery-item">Project 1</div>
          <div className="gallery-item">Project 2</div>
          <div className="gallery-item">Project 3</div>
          <div className="gallery-item">Project 4</div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;