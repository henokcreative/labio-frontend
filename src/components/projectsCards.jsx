// src/components/ProjectsCards.jsx
import React from "react";
import "./ProjectsCards.css";

const ProjectsCards = ({ title, subtitle, imgUrl, link }) => {
  return (
    <div className="projects-card">
      <img src={imgUrl} alt={title} />
      <div className="projects-info">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
        {link && (
          <a href={link} target="_self" rel="noopener noreferrer">
            View Projects
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCards;