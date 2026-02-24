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
        title={<h2 className="mb-0"><BrandName showDot={true} /></h2>}
        subheading="Research Media Production at Turku Bioscience Centre. "
        subtitle="Digital Print • Photography • Video Production • Web Development • Live Streaming"
        ctaText="View Our Work"
        ctaLink="#projects"
        affiliates={ [
          {name: "TBC", logo: "/assets/logos/tbc-logo.svg", url: "https://bioscience.fi", className: "aff-logo-img" },
          {name: "utu", logo: "/assets/logos/utu-logo.svg", url: "https://utu.fi", className: "aff-logo-img" },
          {name: "abo", logo: "/assets/logos/abo-logo.svg", url: "https://abo.fi", className: "aff-logo-img" },

        ]}
      />

      <MissionSection />

      <ServicesSection />

      <section className="projects-alt-section col col-md-10 container" id="projects">
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

      <CollabsSlider />

    </div>
  );
};

export default LandingPage;
