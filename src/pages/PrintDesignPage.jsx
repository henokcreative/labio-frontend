// src/pages/PrintDesignPage.jsx
import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import "./ProjectsGrid.css";
import "./PrintDesignPage.css";
import Hero from "../components/Hero";
import Lightbox from "yet-another-react-lightbox";

const PrintDesignPage = () => {
  const photos = [
    { imgUrl: "/assets/webprintdesign/inactivation_cascade_white bg_inos.png", title: "Inactivation Cascade" },
    { imgUrl: "/assets/webprintdesign/Scientific-User-Forum_05042022-1024x576.jpg", title: "Scientific User Forum" },
    { imgUrl: "/assets/webprintdesign/News-thumbnail FLAT.png", title: "News Thumbnail" },
    { imgUrl: "/assets/webprintdesign/Prof-Ellen-FoS-A4.png", title: "Prof Ellen Poster" },
    { imgUrl: "/assets/webprintdesign/cold_Bioimaging_news.png", title: "Cold Bioimaging News" },
    { imgUrl: "/assets/webprintdesign/Open_data_poster.png", title: "Open Data Poster" },
    { imgUrl: "/assets/webprintdesign/ImmunologySeminarSeries-ISS-07052024.jpg", title: "Immunology Seminar Series" },
    { imgUrl: "/assets/webprintdesign/OSHW.jpg", title: "OSHW Design" },
    { imgUrl: "/assets/webprintdesign/Scientific-User-Forum_05042022-1024x576.jpg", title: "Scientific User Forum 2" },
    { imgUrl: "/assets/webprintdesign/tcb-brochure-cover.png", title: "TCB Brochure Cover" },
    { imgUrl: "/assets/webprintdesign/CourseAD-Key-elements-in-leading-a-pharmaceutical-company.jpg", title: "CourseAD Key Elements" },
    { imgUrl: "/assets/webprintdesign/InFLAMES-CC-06102023-A3-Print.png", title: "InFLAMES Print Design" },
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className="photos-page">
      <Hero
        title="Print & Design Projects"
        subtitle="A showcase of visual materials created for scientific communication and branding."
      />
<section className="print-design-intro">
        <p>
          At Labio Creative Studio, we specialize in crafting visually compelling print and design materials tailored for the scientific community. Our portfolio showcases a diverse range of projects, including posters, brochures, and digital graphics, all designed to effectively communicate complex scientific concepts with clarity and creativity. Explore our collection to see how we bring scientific ideas to life through innovative design.
        </p>
      </section>
      <section className="print-preview">
        <div className="masonry-grid">
          {photos.map((photo, i) => (
            <div key={i} className="masonry-item" onClick={() => openLightbox(i)}>
              <img src={photo.imgUrl} alt={photo.title} />
              <div className="photo-overlay">
                <span>{photo.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map((photo) => ({
          src: photo.imgUrl,
          title: photo.title,
        }))}
      />
    </div>
  );
};

export default PrintDesignPage;