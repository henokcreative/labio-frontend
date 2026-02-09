// src/pages/LivestreamingPage.jsx
import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import "./LivestreamingPage.css";

const LivestreamingPage = () => {
    const videos = [
    { title: "Microscopy Live: Seeprakala syöpätutkimuksen työkaluna", link: "https://www.youtube.com/embed/gzF6mfNEQ7c?si=wmy4RPDi7B5MNOFe" },
    { title: "Microscopy Live: Imusolmuke lähikuvassa", link: "https://www.youtube.com/embed/rH1lJvAf1ig?si=joW15DVW32d79q_9" },
  ];
  return (
    <div className="livestream-page">
      {/* Hero */}
      <Hero
        title="Livestreaming Services"
        subheading="Professional Live Broadcasts"
        // subtitle="Conferences • Seminars • Talks • Hybrid Events"
        // ctaText="Book a Livestream"
        // ctaLink="/contact"
      />

      {/* Intro */}
      <section className="livestream-intro">
        <p>
          We deliver reliable, high-quality livestreaming for scientific,
          academic, and professional events. From small seminars to
          large hybrid conferences, we make sure your audience never misses a moment.
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

      {/* What We Stream */}
      <section className="livestream-section">
        <h2 className="my-5">What We Livestream</h2>
        <div className="livestream-grid">
          <div> 
            <h3>Scientific Conferences</h3>
            <p>Multi-camera coverage, slides integration, and remote speakers.</p>
          </div>
          <div>
            <h3>Seminars & Lectures</h3>
            <p>Clear audio, clean visuals, and easy access for online audiences.</p>
          </div>
          <div>
            <h3>Panel Discussions</h3>
            <p>Live switching between speakers with professional moderation.</p>
          </div>
          <div>
            <h3>Hybrid Events</h3>
            <p>Seamless experience for both in-person and remote participants.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* <section className="livestream-section alt">
        <h2>How It Works</h2>
        <ol className="livestream-steps">
          <li><strong>Pre-event planning</strong> – technical setup & platform testing</li>
          <li><strong>On-site production</strong> – cameras, audio, and live switching</li>
          <li><strong>Live broadcast</strong> – streamed to your preferred platform</li>
          <li><strong>Post-event delivery</strong> – recordings and highlight clips</li>
        </ol>
      </section> */}

      {/* Quality */}
      {/* <section className="livestream-section">
        <h2>Professional Quality</h2>
        <p>
          We use broadcast-grade cameras, clean audio capture,
          and reliable streaming infrastructure to ensure stable,
          high-definition live delivery.
        </p>
      </section> */}

      {/* CTA */}
      {/* <section className="livestream-cta">
        <h2>Planning a Live Event?</h2>
        <p>Let’s discuss your setup and streaming needs.</p>
        <Link to="/contact" className="btn button">
          Get in Touch
        </Link>
      </section> */}
    </div>
  );
};

export default LivestreamingPage;