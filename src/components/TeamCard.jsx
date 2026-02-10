import React from "react";
import "./TeamCard.css";

const TeamCard = ({ name, role, email, phone, imgUrl, link }) => {
  return (
    <div className="team-card">
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p className="lead">{role}</p>
      <p>{email}</p>
      <p>{phone}</p>
      {link && (
        <a className="btn-primary btn" href={link} target="_self" rel="noopener noreferrer">
          View my résumé
        </a>
      )}
    </div>
  );
};

export default TeamCard;