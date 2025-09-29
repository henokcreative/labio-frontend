// src/pages/WebdesignPage.jsx
import React from "react";

const WebdesignPage = () => {
  return (
    <>
      <section className="hero-section bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Web Design Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We design clean, responsive, and powerful websites that express your brand and engage your audience.
        </p>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="shadow-lg rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition">
          <img src="/images/web1.jpg" alt="Web Project 1" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Corporate Websites</h3>
            <p className="text-gray-600">
              Professional websites tailored to represent your business and convert visitors into clients.
            </p>
          </div>
        </div>

        <div className="shadow-lg rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition">
          <img src="/images/web2.jpg" alt="Web Project 2" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">E-commerce Design</h3>
            <p className="text-gray-600">
              Intuitive and secure online stores that enhance the shopping experience.
            </p>
          </div>
        </div>

        <div className="shadow-lg rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition">
          <img src="/images/web3.jpg" alt="Web Project 3" className="w-full h-56 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Portfolio Websites</h3>
            <p className="text-gray-600">
              Sleek, minimal designs to showcase your creative work beautifully.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebdesignPage;