
import React from "react";
import { Link } from "react-router-dom";
import "./cards.css";

const ProjectsCards = ({ title, subtitle, imgUrl, link }) => {
  return (
    <div className="projects-card">
      <img src={imgUrl} alt={title} />

      <div className="projects-info">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}

        {link && (
          <Link to={link} className="view-projects-link">
            View Projects →
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectsCards;