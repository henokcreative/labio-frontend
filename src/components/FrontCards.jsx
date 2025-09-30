// src/components/FrontCards.jsx
import React from "react";
import "./FrontCards.css";

const FrontCards = ({ title, subtitle, imgUrl, link }) => {
  return (
    <div className="Front-card">
      <img src={imgUrl} alt={title} />
      <div className="Front-info">
        <h3>{title}</h3>
        <div>
            {subtitle && <p>{subtitle}</p>}
        
            {link && (
              <a href={link} target="_self" rel="noopener noreferrer">
                View Projects
              </a>
            )}
        </div>
      </div>
    </div>
  );
};

export default FrontCards;
