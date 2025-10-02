import React, { useState } from "react";
import MasonryGrid from "../components/MasonryGrid";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./ProjectsGrid.css";
import Hero from "../components/Hero";

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
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openLightbox = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className="photos-page">
              {/* Hero Section */}
      <Hero
        title="Photography Services"
        subtitle=" High-quality images captured professionally."
      />
   
      <div className="masonry-grid">
        {photos.map((photo, i) => (
          <div key={i} className="masonry-item" onClick={() => openLightbox(i)}>
            <img src={photo.imgUrl} alt={photo.title} />
            <div className="photo-overlay">
              <span>{photo.title}</span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={photos.map((photo) => ({
          src: photo.imgUrl,
          title: photo.title,
        }))}
      />
    </div>
  );
};

export default PhotosPage;