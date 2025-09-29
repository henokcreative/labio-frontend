// src/pages/VideosPage.jsx
import React from "react";

const VideosPage = () => {
  const videos = [
    { title: "Lab Workflow", src: "/videos/lab_workflow.mp4" },
    { title: "Product Demo", src: "/videos/product_demo.mp4" },
    { title: "Interview with Scientist", src: "/videos/interview.mp4" },
  ];

  return (
    <>
      <section className="hero-section bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Videography Services</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          High-quality video production for labs, products, and interviews.
        </p>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="shadow-lg rounded-2xl overflow-hidden bg-white hover:shadow-2xl transition"
          >
            <video
              src={video.src}
              controls
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default VideosPage;