// src/components/MasonryGrid.jsx
import React from "react";
import Masonry from "react-masonry-css";
import ProjectCard from "./ProjectCard";
import "./MasonryGrid.css";

const MasonryGrid = ({ items }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item, idx) => (
        <ProjectCard key={idx} {...item} />
      ))}
    </Masonry>
  );
};

export default MasonryGrid;