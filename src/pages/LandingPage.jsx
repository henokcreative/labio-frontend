



// src/pages/LandingPage.jsx
import React from "react";
import Hero from "../components/Hero";
import MissionSection from "../components/landing/MissionSection";
import ServicesSection from "../components/landing/ServicesSection";
import FeaturedProjectRow from "../components/landing/FeaturedProjectRow";
import "./LandingPage.css";

const LandingPage = () => {

  const projects = [
    { title: "Photography", imgUrl: "assets/projects/project1.jpg", link: "/photos" },
    { title: "Web Design", imgUrl: "assets/projects/project2.jpg", link: "/web-design" },
    { title: "Videography", imgUrl: "assets/projects/project3.jpg", link: "/videos" },
    { title: "Print Design", imgUrl: "assets/projects/project4.png", link: "/print-design" },
  ];

  return (
    <div className="landing-page">

      <Hero
        title="LaBio Creative Studio"
        subheading="Research Media Production"
        subtitle="Digital Print • Photography • Videography • Web Development"
        ctaText="View Our Work"
        ctaLink="#projects"
      />

      <MissionSection />

      <ServicesSection />

      <section className="projects-alt-section" id="projects">
        {projects.map((project, idx) => (
          <FeaturedProjectRow
            key={idx}
            title={project.title}
            imgUrl={project.imgUrl}
            link={project.link}
            reverse={idx % 2 === 1}
          />
        ))}
      </section>

    </div>
  );
};

export default LandingPage;
