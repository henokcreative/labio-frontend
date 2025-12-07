import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // import new Navbar
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PhotosPage from "./pages/PhotosPage";
import WebdesignPage from "./pages/WebdesignPage";
import VideosPage from "./pages/VideosPage";
import PrintDesignPage from "./pages/PrintDesignPage";
import ResumePage from "./pages/ResumePage";
import Footer from "./components/Footer";
import "./AppTypography.css";


import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* use your new Navbar component */}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/web-design" element={<WebdesignPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/print-design" element={<PrintDesignPage />} />
           <Route path="/resume" element={<ResumePage/>} />
        </Routes>
        <Footer /> {/* consistent footer across all pages */}
      </div>
    </Router>
  );
}

export default App;