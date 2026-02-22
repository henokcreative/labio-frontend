import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./StaffmessagingPage.css";

const API = process.env.REACT_APP_API_URL;

const StaffMessagingPage = () => {
    const [conversations, setConversations] = useState([]);
    const [activeConv, setActiveConv] = useState(null);
    const [newMessage, setNewMessage] = useState("");
    const [clients, setClients] = useState([]);
    const [showNewConv, setShowNewConv] = useState(false);
    const [newConvData, setNewConvData] = useState({ client_id: "", subject: "" });
    const [error, setError] = useState(null);
    const [sending, setSending] = useState(false);
    const [filter, setFilter] = useState("all");
    const navigate = useNavigate();
    const token = localStorage.getItem("access_token");

    const fetchConversations = useCallback(async () => {
        try {
            const res = await fetch(`${API}/api/messaging/conversations/`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.status === 401) { navigate("/login"); return; }
            const data = await res.json();
            setConversations(data);
        } catch {
            setError("Failed to load conversations.");
        }
    }, [token, navigate]);

    const fetchClients = useCallback(async () => {
        try {
            const res = await fetch(`${API}/api/messaging/clients/`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await res.json();
            setClients(data);
        } catch {}
    }, [token]);

    useEffect(() => {
        if (!token) { navigate("/login"); return; }
        fetchConversations();
        fetchClients();
        const interval = setInterval(fetchConversations, 15000);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSend = async (e) => {
        e.preventDefault();
        if (!newMessage.trim() || !activeConv) return;
        setSending(true);
        try {
            const res = await fetch(`${API}/api/messaging/conversations/${activeConv.id}/send/`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify({ body: newMessage }),
            });
            if (res.ok) {
                setNewMessage("");
                fetchConversations();
            }
        } catch {
            setError("Failed to send.");
        } finally {
            setSending(false);
        }
    };

    const handleAssign = async (convId) => {
        try {
            const res = await fetch(`${API}/api/messaging/conversations/${convId}/assign/`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
            });
            if (res.ok) fetchConversations();
        } catch {}
    };

    const handleMarkRead = async (convId) => {
        try {
            await fetch(`${API}/api/messaging/conversations/${convId}/mark-read/`, {
                method: "POST",
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchConversations();
        } catch {}
    };

    const handleStartConversation = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API}/api/messaging/conversations/start/`, {
                method: "POST",
                headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                body: JSON.stringify(newConvData),
            });
            if (res.ok) {
                setShowNewConv(false);
                setNewConvData({ client_id: "", subject: "" });
                fetchConversations();
            }
        } catch {
            setError("Failed to start conversation.");
        }
    };

    const filteredConversations = conversations.filter(c => {
        if (filter === "unread") return c.unread_count > 0;
        if (filter === "mine") return c.assigned_staff_username !== null;
        return true;
    });

    const activeConvFull = conversations.find(c => c.id === activeConv?.id);

    return (
        <div className="staff-page">

            {/* Sidebar */}
            <aside className="staff-sidebar">
                <div className="staff-sidebar-header">
                    <div className="staff-logo">
                        <span className="staff-logo-dot" />
                        <span>LaBio<strong>Media</strong></span>
                    </div>
                    <div className="staff-sidebar-title">Staff Messaging</div>
                </div>

                {/* Filters */}
                <div className="staff-filters">
                    {['all', 'unread', 'mine'].map(f => (
                        <button
                            key={f}
                            className={`staff-filter-btn ${filter === f ? 'active' : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f === 'all' ? 'All' : f === 'unread' ? 'Unread' : 'Assigned'}
                        </button>
                    ))}
                </div>

                {/* New conversation button */}
                <button className="staff-new-btn" onClick={() => setShowNewConv(true)}>
                    + New Conversation
                </button>

                {/* Conversation list */}
                <div className="staff-conv-list">
                    {filteredConversations.length === 0 ? (
                        <p className="staff-empty">No conversations</p>
                    ) : (
                        filteredConversations.map(conv => (
                            <div
                                key={conv.id}
                                className={`staff-conv-item ${activeConv?.id === conv.id ? 'active' : ''}`}
                                onClick={() => { setActiveConv(conv); handleMarkRead(conv.id); }}
                            >
                                <div className="staff-conv-top">
                                    <span className="staff-conv-client">{conv.client_username}</span>
                                    {conv.unread_count > 0 && (
                                        <span className="staff-unread-badge">{conv.unread_count}</span>
                                    )}
                                </div>
                                <div className="staff-conv-subject">{conv.subject}</div>
                                <div className="staff-conv-meta">
                                    {conv.assigned_staff_username
                                        ? `👤 ${conv.assigned_staff_username}`
                                        : '⚪ Unassigned'}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <button className="staff-logout" onClick={() => { localStorage.removeItem("access_token"); navigate("/login"); }}>
                    Sign Out
                </button>
            </aside>

            {/* Main */}
            <main className="staff-main">
                {error && <div className="staff-error">{error}</div>}

                {/* New conversation modal */}
                {showNewConv && (
                    <div className="staff-modal-overlay" onClick={() => setShowNewConv(false)}>
                        <div className="staff-modal" onClick={e => e.stopPropagation()}>
                            <h3>Start New Conversation</h3>
                            <form onSubmit={handleStartConversation}>
                                <div className="staff-modal-field">
                                    <label>Client</label>
                                    <select
                                        value={newConvData.client_id}
                                        onChange={e => setNewConvData({ ...newConvData, client_id: e.target.value })}
                                        required
                                    >
                                        <option value="">Select a client...</option>
                                        {clients.map(c => (
                                            <option key={c.id} value={c.id}>
                                                {c.first_name || c.username}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="staff-modal-field">
                                    <label>Subject</label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Project Proposal"
                                        value={newConvData.subject}
                                        onChange={e => setNewConvData({ ...newConvData, subject: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="staff-modal-actions">
                                    <button type="button" className="staff-modal-cancel" onClick={() => setShowNewConv(false)}>Cancel</button>
                                    <button type="submit" className="staff-modal-submit">Start</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                {!activeConvFull ? (
                    <div className="staff-welcome">
                        <div className="staff-welcome-icon">✦</div>
                        <h2>Select a conversation</h2>
                        <p>Choose a conversation from the sidebar or start a new one.</p>
                    </div>
                ) : (
                    <>
                        {/* Conversation header */}
                        <div className="staff-conv-header">
                            <div className="staff-conv-header-left">
                                <h2>{activeConvFull.subject}</h2>
                                <div className="staff-conv-header-meta">
                                    <span className="staff-client-tag">👤 {activeConvFull.client_username}</span>
                                    {activeConvFull.assigned_staff_username ? (
                                        <span className="staff-assigned-tag">🟢 {activeConvFull.assigned_staff_username}</span>
                                    ) : (
                                        <span className="staff-unassigned-tag">⚪ Unassigned</span>
                                    )}
                                </div>
                            </div>
                            <div className="staff-conv-header-actions">
                                {!activeConvFull.assigned_staff_username && (
                                    <button className="staff-assign-btn" onClick={() => handleAssign(activeConvFull.id)}>
                                        Assign to Me
                                    </button>
                                )}
                                {activeConvFull.unread_count > 0 && (
                                    <button className="staff-read-btn" onClick={() => handleMarkRead(activeConvFull.id)}>
                                        Mark Read
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="staff-messages">
                            {activeConvFull.messages.length === 0 ? (
                                <div className="staff-no-messages">No messages yet — send the first one!</div>
                            ) : (
                                activeConvFull.messages.map(msg => {
                                    const isStaff = msg.sender_username !== activeConvFull.client_username;
                                    return (
                                        <div key={msg.id} className={`staff-msg ${isStaff ? 'staff-msg-staff' : 'staff-msg-client'}`}>
                                            <div className="staff-msg-sender">
                                                {isStaff ? `🟢 ${msg.sender_username}` : `👤 ${msg.sender_username}`}
                                            </div>
                                            <div className="staff-msg-body">{msg.body}</div>
                                            <div className="staff-msg-time">{new Date(msg.created_at).toLocaleString()}</div>
                                        </div>
                                    );
                                })
                            )}
                        </div>

                        {/* Reply */}
                        <form className="staff-reply" onSubmit={handleSend}>
                            <textarea
                                value={newMessage}
                                onChange={e => setNewMessage(e.target.value)}
                                placeholder="Write your reply to the client..."
                                rows={3}
                                onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(e); } }}
                            />
                            <button type="submit" disabled={sending || !newMessage.trim()}>
                                {sending ? "Sending..." : "Send Reply"}
                            </button>
                        </form>
                    </>
                )}
            </main>
        </div>
    );
};

export default StaffMessagingPage;