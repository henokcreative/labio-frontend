import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import BrandName from "./BrandName";
const API = process.env.REACT_APP_API_URL;


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unread, setUnread] = useState(0);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("access_token");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchUnread = async () => {
      try {
        const res = await fetch(`${API}/api/messaging/unread/`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
        });
        if (res.ok) {
          const data = await res.json();
          setUnread(data.unread);
        }
      } catch {}
    };
    fetchUnread();
    const interval = setInterval(fetchUnread, 30000); // check every 30 seconds
    return () => clearInterval(interval);
  }, [isLoggedIn]);

  const handleLoginClick = () => {
    setIsOpen(false);
    navigate(isLoggedIn ? "/dashboard" : "/login");
  };

  return (
    <nav className="navbar p-2 position-sticky top-0 bg-light d-flex align-items-center justify-content-between">
      <NavLink to="/">
        <h3 className="mb-0">
          <BrandName variant="dark"/>
        </h3>
      </NavLink>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
        <NavLink to="/our-work" onClick={() => setIsOpen(false)}>Our Work</NavLink>
        <NavLink to="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
        <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
      </div>

      <div className="navbar-right">
        <button className="login-icon-btn" onClick={handleLoginClick} title={isLoggedIn ? "Go to Dashboard" : "Client Login"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          {unread > 0 && <span className="login-icon-badge">{unread}</span>}
          {isLoggedIn && unread === 0 && <span className="login-icon-dot" />}
        </button>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;