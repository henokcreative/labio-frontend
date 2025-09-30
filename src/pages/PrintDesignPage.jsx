// src/pages/PrintDesignPage.jsx
import React from "react";
import "./PrintDesignPage.css";

const PrintDesignPage = () => {
  const printImages = [
    [
      "assets/webprintdesign/tcb-brochure-cover.png",
      "assets/webprintdesign/CourseAD-Key-elements-in-leading-a-pharmaceutical-company.jpg",
      "assets/webprintdesign/InFLAMES-CC-06102023-A3-Print.png",
    ],
    [
      "assets/webprintdesign/inactivation_cascade_white bg_inos.png",
      "assets/webprintdesign/Scientific-User-Forum_05042022-1024x576.jpg",
      "assets/webprintdesign/News-thumbnail FLAT.png",
      "assets/webprintdesign/Prof-Ellen-FoS-A4.png",
    ],
    [
      "assets/webprintdesign/cold_Bioimaging_news.png",
      "assets/webprintdesign/Open_data_poster.png",
      "assets/webprintdesign/ImmunologySeminarSeries-ISS-07052024.jpg",
      "assets/webprintdesign/OSHW.jpg",
      "assets/webprintdesign/Scientific-User-Forum_05042022-1024x576.jpg",
    ],
  ];

  return (
    <div className="printdesign-page">
      <h1 className="page-title">Print Design Projects</h1>
      <p className="page-subtitle">
        A showcase of our professional print design work including brochures, posters, and publications.
      </p>

      <div className="columns">
        {printImages.map((column, colIdx) => (
          <div key={colIdx} className="column">
            {column.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Print Project ${idx + 1}`}
                className="print-image"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintDesignPage;