import React from "react";
import ContactForm from "../components/ContactForm";
import ResumeCard from "../components/ResumeCard";
import TeamCard from "../components/TeamCard";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Have questions? Send us a message and we will respond promptly.</p>
      <ContactForm />
            {/* <h1>Contact Me</h1>
      <p>Reach out for collaborations, inquiries, or viewing my full CV.</p>

      <ResumeCard /> */}

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
    </div>
  );
};

export default ContactPage;


