// src/pages/LandingPage.jsx
import React from "react";
import Hero from "../components/Hero";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import ProjectCards from "../components/projectsCards";

const LandingPage = () => {
  // Featured projects
  const projects = [
    { title: "Photography", imgUrl: "assets/projects/project1.jpg", link: "/photos" },
    { title: "Web Design", imgUrl: "assets/projects/project2.jpg", link: "/web-design" },
    { title: "Videography", imgUrl: "assets/projects/project3.jpg", link: "/videos" },
    { title: "Print Design", imgUrl: "assets/projects/project4.png", link: "/print-design" },
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <Hero
        title="LaBio Creative Studio"
        subheading="Research Media Production"
        subtitle="Digital Print • Photography • Videography • Web Development"
        ctaText="View Our Work"
        ctaLink="#projects"
      />

      {/* Mission Section */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Labio empowers scientists and creatives with the knowledge and tools
          they need to succeed in the business of science and design.
        </p>
      </section>
      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <p>
          We provide digital print, photography, videography, and web
          development services for small businesses. Our goal is to help you
          create visually stunning and interactive digital experiences.
        </p>
      </section>
      {/* Featured Projects Section */}
      <section className="gallery" id="projects">
        <h2>Featured Projects</h2>
        <div className="gallery-flex">
          {projects.map((project, idx) => (
            <Link key={idx} to={project.link} className="gallery-item">
              <ProjectCards
                title={project.title}
                imgUrl={project.imgUrl}
                link={project.link}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
