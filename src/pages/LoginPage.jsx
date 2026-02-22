import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
const API = process.env.REACT_APP_API_URL;

const LoginPage = () => {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const response = await fetch(`${API}/api/auth/login/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("access_token", data.access);
                localStorage.setItem("refresh_token", data.refresh);
                navigate("/dashboard");
            } else {
                setError("Invalid username or password.");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-bg" />
            <div className="login-card">
                <div className="login-brand">
                    <span className="login-brand-dot" />
                    <span>LaBio<strong>Media</strong></span>
                </div>
                <h1 className="login-title">Client Portal</h1>
                <p className="login-sub">Sign in to access your workspace</p>

                {error && <div className="login-error">{error}</div>}

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="login-field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                            autoComplete="username"
                        />
                    </div>
                    <div className="login-field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                            autoComplete="current-password"
                        />
                    </div>
                    <button type="submit" className="login-btn" disabled={loading}>
                        {loading ? <span className="login-spinner" /> : "Sign In"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;