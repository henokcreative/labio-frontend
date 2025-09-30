import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://labio.onrender.com/api/messages/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSuccess(true);
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div className="contact-form-container">
            {success && <p className="success-message">Message sent successfully!</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;