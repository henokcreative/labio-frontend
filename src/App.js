import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PhotosPage from "./pages/PhotosPage";
import WebdesignPage from "./pages/WebdesignPage";
import VideosPage from "./pages/VideosPage";
// import PrintDesignPage from "./pages/PrintDesignPage";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h2 className="logo">Labio</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/web-design" element={<WebdesignPage />} />
          <Route path="/videos" element={<VideosPage />} />
          {/* <Route path="/print-design" element={<PrintDesignPage />} /> */}
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;