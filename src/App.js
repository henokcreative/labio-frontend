import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PhotosPage from "./pages/PhotosPage";
import WebdesignPage from "./pages/WebdesignPage";
import VideosPage from "./pages/VideosPage";
import PrintDesignPage from "./pages/PrintDesignPage";
import HenokResumePage from "./pages/HenokResumePage";
import Footer from "./components/Footer";
import "./AppTypography.css";
import LivestreamingPage from "./pages/LivestreamingPage";
import PricingPage from "./pages/PricingPage";
import OurWorkPage from "./pages/OurWorkPage";


// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper shadow">
        <Navbar /> {/* use your new Navbar component */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-work" element={<OurWorkPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/photos" element={<PhotosPage />} />
          <Route path="/web-design" element={<WebdesignPage />} />
          <Route path="/videos" element={<VideosPage />} />
          <Route path="/print-design" element={<PrintDesignPage />} />
          <Route path="/henok-resume" element={<HenokResumePage />} />
          <Route path="/live-stream" element={<LivestreamingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer /> {/* consistent footer across all pages */}
      </div>
    </Router>
  );
}
export default App;