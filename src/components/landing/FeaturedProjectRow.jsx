// src/components/landing/FeaturedProjectRow.jsx
import { Link } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";

const FeaturedProjectRow = ({ title, description, imgUrl, link, reverse }) => {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`project-alt-row p-2 mb-5 reveal ${reverse ? "reverse" : ""}`}
    >
      <div className="project-alt-text">
        <h4 className="fw-bold mb-3">{title}</h4>
        <p>
          {description || `Explore our work in ${title.toLowerCase()}, where creativity meets clean design and professional execution.`}
        </p>
        <Link to={link} className="view-link btn btn-brand">
          View Projects →
        </Link>
      </div>

      <Link to={link} className="project-alt-card">
        <div className="image-wrapper">
          <img src={imgUrl} alt={title} className="img-fluid" />
        </div>
      </Link>
    </div>
  );
};

export default FeaturedProjectRow;