// src/components/landing/ServicesSection.jsx
import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";

const ServicesSection = () => {
  const ref = useScrollReveal();

  const services = [
    {
      icon: "📸",
      title: "Photography",
      description: "Professional scientific and event photography with expert composition and lighting"
    },
    {
      icon: "🎬",
      title: "Video Production",
      description: "Compelling documentaries, tutorials, and promotional videos for research communication"
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description: "Stunning print and digital designs including posters, presentations, and branding"
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Modern, responsive websites and interactive platforms for research institutions"
    },
    {
      icon: "📺",
      title: "Live Streaming",
      description: "Professional streaming setup for conferences, seminars, and virtual events"
    },
    {
      icon: "🖨️",
      title: "Print Design",
      description: "High-quality print materials from business cards to large-format displays"
    }
  ];

  return (
    <section ref={ref} className="reveal services-section">
      <div className="container">
        <h2 className="gradient-text">Our Services</h2>
        <p className="lead">
          From concept to creation, we deliver comprehensive media solutions tailored
          specifically for research institutions and scientific communication needs.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;