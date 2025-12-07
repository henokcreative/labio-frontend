import React from "react";
import "./TeamCard.css";

const TeamCard = ({ name, role, imgUrl, link }) => {
  return (
    <div className="team-card">
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      {link && (
        <a className="button btn" href={link} target="_self" rel="noopener noreferrer">
          View CV
        </a>
      )}
    </div>
  );
};

export default TeamCard;