import React from "react";
import ContactForm from "../components/ContactForm";
import TeamCard from "../components/TeamCard";
import "./ContactPage.css";

const team = [
    { 
        name: "Henok Karvonen", 
        role: "Multimedia Producer | Project Specialist", 
        imgUrl: "assets/team/hk.jpg", 
        link: "/henok-resume", 
        phone: "+358 45 6955689", 
        email: "henok.karvonen@utu.fi" 
    },
];

const ContactPage = () => {
    return (
        <div className="contact-page">
            <section className="contact-form-section">

                <ContactForm />
            </section>
            <section className="team mt-4">
                                <h2>Meet the team</h2>
                
                <div className="team-grid">
                    {team.map((member) => (
                        <TeamCard key={member.email} {...member} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default ContactPage;