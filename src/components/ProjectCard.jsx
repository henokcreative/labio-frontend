// src/components/ProjectCard.jsx
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, subtitle, imgUrl, link }) => {
  return (
    <div className="project-card">
      <img src={imgUrl} alt={title} />
      <div className="project-info">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
        {link && (
          <a href={link} target="_self" rel="noopener noreferrer">
            View Project
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;