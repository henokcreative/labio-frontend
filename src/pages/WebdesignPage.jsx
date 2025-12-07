// src/pages/WebdesignPage.jsx
import React from "react";
import FrontCards from "../components/projectsCards";
import "./WebdesignPage.css";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";


const WebdesignPage = () => {


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
      <Hero
        title="Web Design & Development"
        subtitle="We create elegant, responsive, and high-performing websites and
          digital solutions to showcase your brand and engage your audience."
   
      />

      {/* Projects Section */}
      <section className="gallery" id="projects">
        <h2>Selected Projects</h2>
        <div className="gallery-flex">
          {projects.map((project, idx) => (
            <Link key={idx} to={project.link} className="gallery-item">
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