import React, { useEffect, useState } from "react";

export default function ClientsList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/messages/")
      .then((r) => r.json())
      .then(setMessages)
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <h2>Client Messages</h2>
      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>
            <strong>{msg.name}</strong>: {msg.message}
          </li>
        ))}
      </ul>
    </div>
  );
}