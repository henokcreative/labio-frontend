import React from "react";
import ContactForm from "../components/ContactForm";
import ResumeCard from "../components/ResumeCard";
import TeamCard from "../components/TeamCard";
import "./ContactPage.css";
import { Link } from "react-router-dom";
const ContactPage = () => {
  const team = [
    { name: "Henok", role: "Founder & Creative Director", imgUrl: "assets/team/henok.jpg", link: "/resume" },
    //{ name: "Jane Doe", role: "Lead Scientist", imgUrl: "/team/jane.jpg" },
  ];
  return (
    <div className="contact-page">
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
        {/* contact form Section */}
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <p>Have questions? Send us a message and we will respond promptly.</p>
        <ContactForm />
      </section>
    </div>
  );
};
export default ContactPage;
