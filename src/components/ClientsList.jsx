import React, { useEffect, useState } from "react";

export default function ClientsList() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("access_token");
        if (!token) {
          setError("Authentication required");
          setLoading(false);
          return;
        }

        const response = await fetch(`${API}/api/contacts/messages/`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 401) {
          localStorage.removeItem("access_token");
          setError("Authentication expired");
          setLoading(false);
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMessages(data);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [API]);

  if (loading) return <div>Loading messages...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Client Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>
              <strong>{msg.name}</strong> ({msg.email}): {msg.message}
              <br />
              <small>Sent: {new Date(msg.submitted_at).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}