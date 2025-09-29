import React from "react";
import "./TeamCard.css";

const TeamCard = ({ name, role, imgUrl }) => {
  return (
    <div className="team-card">
      <img src={imgUrl} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default TeamCard;