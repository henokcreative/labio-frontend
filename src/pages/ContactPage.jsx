import React from "react";
import ContactForm from "../components/ContactForm";
import ResumeCard from "../components/ResumeCard";
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
    </div>
  );
};

export default ContactPage;


