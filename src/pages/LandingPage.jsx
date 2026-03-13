// src/pages/LandingPage.jsx
import React from "react";
import Hero from "../components/Hero";
import MissionSection from "../components/landing/MissionSection";
import ServicesSection from "../components/landing/ServicesSection";
import FeaturedProjectRow from "../components/landing/FeaturedProjectRow";
import "./LandingPage.css";
import CollabsSlider from "../components/slider/slider";
import BrandName from "../components/BrandName";
const LandingPage = () => {

  const projects = [
    { title: "Photography", imgUrl: "assets/projects/project1.jpg", link: "/photos" },
    { title: "Web Design", imgUrl: "assets/projects/project2.jpg", link: "/web-design" },
    { title: "Video Production", imgUrl: "assets/projects/project3.jpg", link: "/videos" },
    { title: "Print Design", imgUrl: "assets/projects/project4.png", link: "/print-design" },
    { title: "Live Streaming", imgUrl: "assets/projects/project5.jpg", link: "/live-stream" },

  ];
  

  return (
    <div className="landing-page">

      <Hero
        title={<h1 className="mb-0"><BrandName showDot={true} variant="dark"/></h1>}
        // heading="Research Media Production"
        subheading="Photography • Video • Web Design • Print • Live Streaming"
        subtitle="Transforming scientific research into compelling visual stories at Turku Bioscience Centre"
        ctaText="Explore Our Work"
        ctaLink="#projects"
        affiliates={[
          {name: "TBC", logo: "/assets/logos/tbc-logo.svg", url: "https://bioscience.fi", className: "aff-logo-img"},
          {name: "UTU", logo: "/assets/logos/utu-logo.svg", url: "https://utu.fi", className: "aff-logo-img"},
          {name: "ÅBO", logo: "/assets/logos/abo-logo.svg", url: "https://abo.fi", className: "aff-logo-img"},
        ]}
      />

      <MissionSection />

      <ServicesSection />

      <section className="projects-alt-section" id="projects">
        <div className="container">
          <h2 className="text-center mb-5">Featured Projects</h2>
          {projects.map((project, idx) => (
            <FeaturedProjectRow
              key={idx}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              link={project.link}
              reverse={idx % 2 === 1}
            />
          ))}
        </div>
      </section>

      <CollabsSlider />

    </div>
  );
};

export default LandingPage;
