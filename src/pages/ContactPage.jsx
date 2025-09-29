import React, { useState } from "react";
import "./ContactPage.css";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // TODO: Send formData to your Django API
    alert("Message sent!");
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Have a project or question? Fill out the form below!</p>

        <section className="contact" id="contact">
  <ContactForm />
</section>
        
    </div>
  );
}

export default ContactPage;