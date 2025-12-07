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
        title="Welcome to Labio Creative Studio"
        subtitle="Digital Print • Photography • Videography • Web Development"
        ctaText="View Our Work"
        ctaLink="#projects"
      />

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