// src/pages/AboutPage.jsx
import React from "react";
import "./AboutPage.css";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import ProjectCard from "../components/projectsCards";

const AboutPage = () => {
    const team = [
        { name: "Henok", role: "Founder & Creative Director", imgUrl: "assets/team/henok.jpg" },
        // { name: "Jane Doe", role: "Lead Scientist", imgUrl: "/team/jane.jpg" },
    ];
    const projects = [
        { title: "Photography", imgUrl: "assets/projects/project1.jpg", link: "/photos" },
        { title: "Web Design", imgUrl: "assets/projects/project2.jpg", link: "/web-design" },
        { title: "Videography", imgUrl: "assets/projects/project3.jpg", link: "/videos" },
        { title: "Print Design", imgUrl: "assets/projects/project4.png", link: "/print-design" },
    ];
    return (
        <div className="about-page">
            {/* Hero Section */}
            <Hero
                title="About Labio Creative Studio"
                subtitle="Digital Print • Photography • Videography • Web Development"
            />

            {/* Services Section */}
            <section className="about-article">
                <h3>The Unsung Role of Multimedia in Modern Science Communication</h3>
                <p>
                    Science has always been about discovery — but discovery alone isn’t enough. In a world saturated with information, even the most groundbreaking research risks being overlooked if it isn’t communicated clearly and compellingly. This is where multimedia steps in, quietly transforming how science is seen, understood, and shared.
                    As research becomes increasingly interdisciplinary and global, visuals play a critical role in connecting people to complex ideas. A well-designed figure can make data more intuitive. A short video can reveal the human story behind a study. A well-structured webpage can turn dense research outputs into accessible narratives for policymakers, funders, and the public.
                </p>
                <p>
                    In biomedical and life science contexts, where the stakes are often high and the concepts intricate, clarity and engagement matter more than ever. Effective multimedia doesn’t oversimplify — it illuminates. It invites curiosity, builds trust, and helps science reach beyond the lab.
                    Behind every image, animation, or presentation lies a blend of scientific literacy and creative storytelling. My own work sits at that intersection: producing videos, posters, presentations, web pages, and photographs that help scientists communicate their discoveries with impact. It’s about bridging two worlds — the precision of science and the emotion of visual narrative.
                    Ultimately, the goal is not just to make science look good, but to make it understood. Because when research is seen and appreciated by wider audiences, it has a greater chance to inspire action, foster collaboration, and drive innovation.
                </p>
            </section>
            {/* Featured Projects Section */}
            <section className="gallery" id="projects">
                <h2>Featured Projects</h2>
                <div className="gallery-flex">
                    {projects.map((project, idx) => (
                        <Link key={idx} to={project.link} className="gallery-item">
                            <ProjectCard
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
export default AboutPage;