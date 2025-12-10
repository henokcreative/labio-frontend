// src/pages/WebdesignPage.jsx
import React from "react";
import FrontCards from "../components/projectsCards";
import "./WebdesignPage.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";


const WebdesignPage = () => {


  const projects = [
    {
      title: "Turku Bioscience Centre",
      subtitle: "Webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-bioscience.png",
      link: "https://bioscience.fi",
    },
    {
      title: "Nordic Metabolomics Society",
      subtitle: "Brand identity, webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-nordmet.png",
      link: "https://nordmet.org",
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
    {
      title: "BarrierForce Centre of Excellence",
      subtitle: "Brand identity, webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-barrierforce.png",
      link: "https://barrierforce.utu.fi/",
      
    },
    {
      title: "Multiepigen",
      subtitle: "Brand identity, webpage design and development",
      imgUrl: "assets/webdesignDev/thumb-multiepigen.png",
      link: "https://multiepigen.utu.fi/",

    },

    
  ];

  return (
    <div className="webdesign-page">


      {/* Hero Section */}
      <Hero
        title="Web Design & Development"
        subtitle="We create elegant, responsive, and high-performing websites and
          digital solutions to showcase your brand and engage your audience."

      />
      <section className="about-mission">
        <h2>Our Approach</h2>
        <p>
          At Labio, we believe that a website is more than just an online
          presence; it's a powerful tool to connect with your audience and
          achieve your business goals. Our team of skilled designers and
          developers work closely with you to understand your vision and
          create a website that reflects your brand identity.
        </p>
      </section>

      {/* Projects Section */}
      <section className="gallery" id="projects">
        <h2>Selected Projects</h2>
        <div className="gallery-flex">
          {projects.map((project, idx) => (
            <Link key={idx} to={project.link} target="_blank" className="gallery-item">
              <FrontCards
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

export default WebdesignPage;