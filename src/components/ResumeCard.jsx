// src/components/ResumeCard.jsx
import React from "react";
import "./ResumeCard.css";

const ResumeCard = () => {
  return (
    <div className="resume-card">
      <div className="resume-headshot">
        <img src="/team/henok.jpg" alt="Henok Karvonen" />
      </div>
      <div className="resume-info">
        <h2>Henok Karvonen</h2>
        <h3>Multimedia Producer</h3>
        <ul>
          <li>Email: <a href="mailto:henok.karvonen@gmail.com">henok.karvonen@gmail.com</a></li>
          <li>Website: <a href="https://henokcreative.github.io" target="_blank">henokcreative.github.io</a></li>
          <li>Mobile: +358 45 6955689</li>
        </ul>
        <a 
          href="/resume/Henok_Karvonen_CV.pdf" 
          target="_blank" 
          className="resume-btn"
        >
          View/Download CV
        </a>
      </div>
    </div>
  );
};

export default ResumeCard;