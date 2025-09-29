// src/pages/PhotosPage.jsx
import React from "react";
import MasonryGrid from "../components/MasonryGrid";

const PhotosPage = () => {
  const photos = [
    { imgUrl: "/assets/photos/pia_lab.jpg", title: "Pia Lab" },
    { imgUrl: "/assets/photos/flower1.jpg", title: "Flower 1" },
    { imgUrl: "/assets/photos/Yellow_flower.jpg", title: "Yellow Flower" },
    { imgUrl: "/assets/photos/squirrel.jpg", title: "Squirrel" },
    { imgUrl: "/assets/photos/Bumbel_bee.jpg", title: "Bumble Bee" },
    { imgUrl: "/assets/photos/purple_fower.jpg", title: "Purple Flower" },
    { imgUrl: "/assets/photos/pia_lab.jpg", title: "Pia Lab" },
    { imgUrl: "/assets/photos/flower1.jpg", title: "Flower 1" },
    { imgUrl: "/assets/photos/Yellow_flower.jpg", title: "Yellow Flower" },
    { imgUrl: "/assets/photos/squirrel.jpg", title: "Squirrel" },
    { imgUrl: "/assets/photos/Bumbel_bee.jpg", title: "Bumble Bee" },
    { imgUrl: "/assets/photos/purple_fower.jpg", title: "Purple Flower" },
  ];

  return (
    <div className="page-container">
      <h1>Photography</h1>
      <p>High-quality images captured professionally.</p>
      <MasonryGrid items={photos} />
    </div>
  );
};

export default PhotosPage;