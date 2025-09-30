// src/pages/WebdesignPage.jsx
import React from "react";
import FrontCards from "../components/FrontCards";
import "./WebdesignPage.css";

const WebdesignPage = () => {
  const services = [
    {
      title: "Corporate Websites",
      subtitle:
        "Professional websites tailored to represent your business and convert visitors into clients.",
      imgUrl: "/images/web1.jpg",
    },
    {
      title: "E-commerce Design",
      subtitle:
        "Intuitive and secure online stores that enhance the shopping experience.",
      imgUrl: "/images/web2.jpg",
    },
    {
      title: "Portfolio Websites",
      subtitle: "Sleek, minimal designs to showcase your creative work beautifully.",
      imgUrl: "/images/web3.jpg",
    },
  ];

  const projects = [
    {
      title: "Turku PET Centre",
      subtitle: "Webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-tpc.JPG",
      link: "https://turkupetcentre.fi",
    },
    {
      title: "InFLAMES Research Flagship",
      subtitle: "Brand identity, webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-inflames.JPG",
      link: "https://inflames.utu.fi",
    },
    {
      title: "BioCity Turku",
      subtitle: "Brand identity, webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-bc.JPG",
      link: "https://biocityturku.fi",
    },
        {
      title: "Turku PET Centre",
      subtitle: "Webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-tpc.JPG",
      link: "https://turkupetcentre.fi",
    },
    {
      title: "InFLAMES Research Flagship",
      subtitle: "Brand identity, webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-inflames.JPG",
      link: "https://inflames.utu.fi",
    },
    {
      title: "BioCity Turku",
      subtitle: "Brand identity, webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-bc.JPG",
      link: "https://biocityturku.fi",
    },
  ];

  return (
    <div className="webdesign-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Web Design & Development</h1>
        <p>
          We create elegant, responsive, and high-performing websites and
          digital solutions to showcase your brand and engage your audience.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <FrontCards
              key={idx}
              title={service.title}
              subtitle={service.subtitle}
              imgUrl={service.imgUrl}
            />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Selected Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <FrontCards
              key={idx}
              title={project.title}
              subtitle={project.subtitle}
              imgUrl={project.imgUrl}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebdesignPage;