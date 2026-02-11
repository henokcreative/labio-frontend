// src/pages/PricingPage.jsx
import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import "./PricingPage.css";

const services = [
  {
    title: "Photography",
    price: "From €400",
    description: "Professional photography for research, events, and branding.",
    features: [
      "On-location or studio",
      "High-resolution delivery",
      "Basic editing included",
    ],
  },
  {
    title: "Videography",
    price: "From €800",
    description: "Short-form videos, interviews, and research storytelling.",
    features: [
      "Planning & scripting",
      "Filming + editing",
      "Subtitles & social formats",
    ],
  },
  {
    title: "Web Design & Development",
    price: "From €1,200",
    description: "Modern, responsive websites tailored to scientific projects.",
    features: [
      "Design + development",
      "Mobile-first layout",
      "SEO & performance focused",
    ],
  },
  {
    title: "Print & Visual Design",
    price: "From €300",
    description: "Posters, figures, and layouts for conferences and publications.",
    features: [
      "Scientific layout expertise",
      "Print-ready files",
      "Fast turnaround",
    ],
  },
  {
    title: "Livestreaming & Event Coverage",
    price: "From €800",
    description: "Live streaming and event coverage for conferences and scientific events.",
    features: [
      "Professional livestream setup",
      "Event recording & editing",
      "Social media integration",
    ],
  },
];

const PricingPage = () => {
  return (
    <div className="pricing-page">
      <Hero
        title="Flexible Pricing"
        subtitle="Clear starting points. Tailored solutions."
      />

      <section className="pricing-section">
        <div className="pricing-grid text-center">
          {services.map((service, i) => (
            <div key={i} className="pricing-card">
              <h3>{service.title}</h3>
              <p className="price">{service.price}</p>
              <p className="description">{service.description}</p>

              <ul>
                {service.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>

              <Link to="/contact" className="btn button">
                Request a Quote
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="pricing-note">
        <p>
          All projects are scoped individually based on goals, timeline, and
          complexity. Academic, non-profit, and long-term collaborations are
          eligible for custom pricing.
        </p>
      </section>
    </div>
  );
};

export default PricingPage;