// src/components/landing/MissionSection.jsx
import useScrollReveal from "../../hooks/useScrollReveal";

const MissionSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="reveal mission-section">
      <h2 className="fw-bold">Our Services</h2>
      <p className="lead">
        We provide digital and print design services, photography, videography, and web
        development  and design services for research and scientific institutions. 
        
        Our goal is to help you create visually stunning and interactive digital experiences. 
        Whether you need a new website, promotional videos, stunning presentation slides, or high-quality
        images, we are here to help you every step of the way.
      </p>
    </section>
  );
};

export default MissionSection;