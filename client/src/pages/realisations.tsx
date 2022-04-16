import * as React from "react";
import GridGallery from "components/grid-gallery/grid-gallery";

const Realisations = () => {
  return (
    <div className="container-fluid">
      <div className="py-5 px-5 flex flex-wrap justify-around items-start">
        <GridGallery />
      </div>
    </div>
  );
};
export default Realisations;
