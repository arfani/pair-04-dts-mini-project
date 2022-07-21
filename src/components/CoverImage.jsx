import React from "react";

import "./styles/coverImage.css";

export default function CoverImage({ children, coverUrl }) {
  return (
    <div
      className="cover_image"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${coverUrl})`,
      }}
    >
      <div className="cover_nav">{children}</div>
    </div>
  );
}
