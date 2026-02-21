import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const [conversations, setConversations] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }

        const fetchConversations = async () => {
            try {
                const response = await fetch("https://labio-backend.onrender.com/api/messaging/conversations/", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.status === 401) {
                    localStorage.removeItem("access_token");
                    navigate("/login");
                    return;
                }

                const data = await response.json();
                setConversations(data);
            } catch (err) {
                setError("Failed to load conversations.");
            }
        };

        fetchConversations();
    }, [token, navigate]);

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        navigate("/login");
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <h2>Your Dashboard</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>

            {error && <p className="error-message">{error}</p>}

            <section className="conversations">
                <h3>Your Conversations</h3>
                {conversations.length === 0 ? (
                    <p>No conversations yet. We'll reach out to you soon!</p>
                ) : (
                    conversations.map((conv) => (
                        <div key={conv.id} className="conversation-card">
                            <h4>{conv.subject}</h4>
                            <p>{conv.messages.length} messages</p>
                        </div>
                    ))
                )}
            </section>
        </div>
    );
};

export default DashboardPage;