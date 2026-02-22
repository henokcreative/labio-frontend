import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardPage.css";

const API = "https://labio-backend.onrender.com";

const DashboardPage = () => {
    const [conversations, setConversations] = useState([]);
    const [activeConv, setActiveConv] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [error, setError] = useState(null);
    const [sending, setSending] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");

 useEffect(() => {
    if (!token) { navigate("/login"); return; }
    fetchConversations();
}, []); // eslint-disable-line react-hooks/exhaustive-deps

    const fetchConversations = async () => {
        try {
            const res = await fetch(`${API}/api/messaging/conversations/`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.status === 401) { localStorage.removeItem("access_token"); navigate("/login"); return; }
            const data = await res.json();
            setConversations(data);
            if (data.length > 0 && !activeConv) setActiveConv(data[0]);
        } catch {
            setError("Failed to load conversations.");
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !activeConv) return;
        setSending(true);
        try {
            const res = await fetch(`${API}/api/messaging/conversations/${activeConv.id}/send/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ body: newMessage }),
            });
            if (res.ok) {
                setNewMessage("");
                fetchConversations();
            }
        } catch {
            setError("Failed to send message.");
        } finally {
            setSending(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        navigate("/login");
    };

    const activeConvFull = conversations.find(c => c.id === activeConv?.id);

    return (
        <div className="dash-page">
            {/* Sidebar */}
            <aside className="dash-sidebar">
                <div className="dash-logo">
                    <span className="dash-logo-dot" />
                    <span>LaBio<strong>Media</strong></span>
                </div>

                <div className="dash-nav-label">Conversations</div>

                <div className="dash-conv-list">
                    {conversations.length === 0 ? (
                        <p className="dash-empty-sidebar">No conversations yet</p>
                    ) : (
                        conversations.map((conv) => (
                            <div
                                key={conv.id}
                                className={`dash-conv-item ${activeConv?.id === conv.id ? "active" : ""}`}
                                onClick={() => setActiveConv(conv)}
                            >
                                <div className="dash-conv-subject">{conv.subject}</div>
                                <div className="dash-conv-meta">{conv.messages.length} messages</div>
                            </div>
                        ))
                    )}
                </div>

                <button className="dash-logout" onClick={handleLogout}>
                    Sign Out
                </button>
            </aside>

            {/* Main */}
            <main className="dash-main">
                {error && <div className="dash-error">{error}</div>}

                {!activeConvFull ? (
                    <div className="dash-welcome">
                        <div className="dash-welcome-icon">✦</div>
                        <h2>Welcome to your portal</h2>
                        <p>Your conversations with LaBioMedia will appear here.</p>
                    </div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="dash-conv-header">
                            <h2>{activeConvFull.subject}</h2>
                            <span className="dash-conv-badge">{activeConvFull.messages.length} messages</span>
                        </div>

                        {/* Messages */}
                        <div className="dash-messages">
                            {activeConvFull.messages.length === 0 ? (
                                <div className="dash-no-messages">No messages yet — send one below!</div>
                            ) : (
                                activeConvFull.messages.map((msg) => {
                                    const isMe = msg.sender_username === activeConvFull.client_username;
                                    return (
                                        <div key={msg.id} className={`dash-msg ${isMe ? "dash-msg-mine" : "dash-msg-theirs"}`}>
                                            <div className="dash-msg-sender">{isMe ? "You" : "LaBioMedia"}</div>
                                            <div className="dash-msg-body">{msg.body}</div>
                                            <div className="dash-msg-time">
                                                {new Date(msg.created_at).toLocaleString()}
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        {/* Reply box */}
                        <form className="dash-reply" onSubmit={handleSend}>
                            <textarea
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                placeholder="Write your message..."
                                rows={3}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(e); }
                                }}
                            />
                            <button type="submit" disabled={sending || !newMessage.trim()}>
                                {sending ? "Sending..." : "Send"}
                            </button>
                        </form>
                    </>
                )}
            </main>
        </div>
    );
};

export default DashboardPage;