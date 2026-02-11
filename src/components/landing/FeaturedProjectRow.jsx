// src/components/landing/FeaturedProjectRow.jsx
import { Link } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";

const FeaturedProjectRow = ({ title, imgUrl, link, reverse }) => {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`project-alt-row p-2 mb-5 reveal ${reverse ? "reverse" : ""}`}
    >
      <div className="project-alt-text">
        <h2 className="fw-bold">{title}</h2>
        <p>
          Explore our work in {title.toLowerCase()}, where creativity meets
          clean design and professional execution.
        </p>
        <Link to={link} className="view-link btn btn-primary">
          View Projects →
        </Link>
      </div>

      <Link to={link} className="project-alt-card">
        <img src={imgUrl} alt={title} />
      </Link>
    </div>
  );
};

export default FeaturedProjectRow;