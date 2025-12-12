// src/components/landing/MissionSection.jsx
import useScrollReveal from "../../hooks/useScrollReveal";

const MissionSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="reveal mission-section">
      <h2>Our Services</h2>
      <p>
        We provide digital print, photography, videography, and web
        development services for small businesses. Our goal is to help you
        create visually stunning and interactive digital experiences.

        Whether you need a new website, promotional videos, or high-quality
        images, our team of experts is here to help you every step of the way.
      </p>
    </section>
  );
};

export default MissionSection;