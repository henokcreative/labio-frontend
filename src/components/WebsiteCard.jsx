// src/components/WebsiteCard.jsx
import React from "react";
import "./WebsiteCard.css";

const WebsiteCard = ({ title, subtitle, imgUrl, link }) => {
  return (
    <div className="website-card">
      <img src={imgUrl} alt={title} />
      <div className="website-info">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="button btn" >
            Visit Website
          </a>
        )}
      </div>
    </div>
  );
};

export default WebsiteCard;