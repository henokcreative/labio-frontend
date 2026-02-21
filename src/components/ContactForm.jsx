import React, { useState } from "react";
import "./ContactForm.css";

const API_URL = "https://labio-backend.onrender.com/api/contacts/submit/";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                const data = await response.json();
                setError(data.detail || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-form-container">
            {success && (
                <p className="success-message">
                    Message sent successfully! We'll get back to you soon.
                </p>
            )}
            {error && <p className="error-message">{error}</p>}

            {!success && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className="btn button" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;