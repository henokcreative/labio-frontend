// src/pages/LandingPage.jsx
import React from "react";
import Hero from "../components/Hero";
import MasonryGrid from "../components/MasonryGrid";
import "./LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  // Featured projects for Masonry

  

const projects = [
  { title: "Photography", imgUrl: "assets/projects/project1.jpg", link: "/photos" },
  { title: "Web Design", imgUrl: "assets/projects/project2.jpg", link: "/web-design" },
  { title: "Videography", imgUrl: "assets/projects/project3.jpg", link: "/videos" },
  { title: "Print Design", imgUrl: "assets/projects/project4.png", link: "/print-design" },
];

<div className="gallery-grid">
  {projects.map((project, idx) => (
    <Link key={idx} to={project.link} className="gallery-item">
      <img src={project.imgUrl} alt={project.title} />
      <h3>{project.title}</h3>
    </Link>
  ))}
</div>
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <Hero
        title="Welcome to Labio Creative Studio"
        subtitle="Digital Print • Photography • Videography • Web Development"
        ctaText="View Our Work"
        ctaLink="#projects"
      />

      {/* Featured Projects Masonry */}
      <section className="gallery" id="projects">
        <h2>Featured Projects</h2>
        <MasonryGrid items={projects} />
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h2>Video Tutorials</h2>
          <p>Learn business essentials for scientists through curated videos.</p>
        </div>
        <div className="feature">
          <h2>Expert Interviews</h2>
          <p>Hear insights from industry professionals and lab leaders.</p>
        </div>
        <div className="feature">
          <h2>Community</h2>
          <p>Join a network of like-minded scientists and entrepreneurs.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;