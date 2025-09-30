// src/pages/VideosPage.jsx
import React from "react";
import "./VideosPage.css";

const VideosPage = () => {
  const videos = [
    { title: "Lab Workflow", link: "https://www.youtube.com/embed/5gzypYXfEos" },
    { title: "Product Demo", link: "https://www.youtube.com/embed/UNAYz3hqAnc" },
    { title: "Interview with Scientist", link: "https://www.youtube.com/embed/2gYRmaCT08U" },
    { title: "Lab Tour", link: "https://www.youtube.com/embed/AcUTazKaNb8" },
  ];

  return (
    <div className="videos-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Videography Services</h1>
        <p>
          High-quality video production for labs, products, and interviews,
          showcasing your work professionally.
        </p>
      </section>

      {/* Videos Grid */}
      <section className="videos-grid">
        {videos.map((video, idx) => (
          <div key={idx} className="video-card">
            <div className="video-wrapper">
              <iframe
                src={video.link}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default VideosPage;