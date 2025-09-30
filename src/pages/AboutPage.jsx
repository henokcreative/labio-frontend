// src/pages/AboutPage.jsx
import React from "react";
import TeamCard from "../components/TeamCard";
import "./AboutPage.css";
import Hero from "../components/Hero";

const AboutPage = () => {
    const team = [
        { name: "Henok", role: "Founder & Creative Director", imgUrl: "assets/team/henok.jpg" },
        // { name: "Jane Doe", role: "Lead Scientist", imgUrl: "/team/jane.jpg" },
    ];

    const services = [
        "Digital Print Design",
        "Photography & Videography",
        "Website Development",
        "Branding & Creative Consulting",
    ];

    return (
        <div className="about-page">


            {/* Hero Section */}
            <Hero
                title="About Labio Creative Studio"
                subtitle="Digital Print • Photography • Videography • Web Development"

            />

            {/* Team Section */}
            <section className="team">
                <h2>Meet the Team</h2>
                <p>Our creative professionals combine expertise in design, tech, and media.</p>
                <div className="team-grid">
                    {team.map((member, idx) => (
                        <TeamCard key={idx} {...member} />
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section className="about-mission">
                <h2>Our Mission</h2>

                <p>
                    Labio empowers scientists and creatives with the knowledge and tools
                    they need to succeed in the business of science and design.
                </p>
            </section>

            {/* Services Section */}
            <section className="services">
                <h2>Our Services</h2>
                <p>
                    We provide digital print, photography, videography, and web
                    development services for small businesses. Our goal is to help you
                    create visually stunning and interactive digital experiences.
                </p>
                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card">
                            <h3>{service}</h3>
                        </div>
                    ))}
                </div>
            </section>


        </div>
    );
};

export default AboutPage;