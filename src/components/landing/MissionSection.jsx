// src/components/landing/MissionSection.jsx
import useScrollReveal from "../../hooks/useScrollReveal";

const MissionSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="reveal mission-section">
      <h2>Our Mission</h2>
      <p>
        Labio empowers scientists and creatives with the knowledge and tools
        they need to succeed in the business of science and design.
        We are dedicated to providing high-quality media production services
        that help our clients communicate their research and ideas effectively.
      


      </p>
    </section>
  );
};

export default MissionSection;