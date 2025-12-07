// src/components/ResumeCard.jsx
import React from "react";
import "./ResumeCard.css";


const ResumeCard = () => {
  return (
    <div className="resume-card">
      <div className="resume-headshot">
        <img src="assets/team/henok.jpg" alt="Henok Karvonen" />
      </div>
      <div className="resume-info">
        <h4>Henok Karvonen</h4>
        <p>Multimedia Producer</p>

        <a 
          href="/resume" 
          target="_blank" 
          className="button btn"
        >
          View/Download CV
        </a>
      </div>
    </div>
  );
};

export default ResumeCard;