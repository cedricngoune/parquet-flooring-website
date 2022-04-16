import React, { useState } from "react";
import { galleryData, GalleryProps } from "datas/gallery/images-data";

const GridGallery = () => {
  const [imgData, setImgData] = useState<GalleryProps[]>(galleryData);
  return (
    <div className="grid grid-cols-4 gap-1">
      {imgData.map(({ imageUrl, description }) => (
        <img
          className="h-auto hover:pointer"
          src={imageUrl}
          alt={description}
        />
      ))}
    </div>
  );
};
export default GridGallery;
