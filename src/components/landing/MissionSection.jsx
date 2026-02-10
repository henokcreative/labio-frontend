// src/components/landing/MissionSection.jsx
import useScrollReveal from "../../hooks/useScrollReveal";

const MissionSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="reveal mission-section">
      <h2 className="fw-bold">Our Mission</h2>
      <p className="lead">
        LABIO MEDIA empowers scientists and creatives with the knowledge and tools
        they need to succeed in the business of science and research.
        We are dedicated to providing high-quality media production services
        that help our clients communicate their research and ideas effectively.
      </p>
    </section>
  );
};

export default MissionSection;