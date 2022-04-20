import React, { useState } from "react";
import { projectData, ProjectProps } from "datas/projects/project-data";

const GridProject = () => {
  const [data, setData] = useState<ProjectProps[]>(projectData);
  return (
    <div className="grid grid-cols-4 gap-8 mx-14">
      {data.map(({ cover, title }, index) => (
        <div className="relative" key={index}>
          <img
            className="data-img cursor-pointer hover:filter brightness-50 "
            src={cover}
            alt={title}
          />
          <h5 className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-4xl text-white font-semibold">
            {title}
          </h5>
        </div>
      ))}
    </div>
  );
};
export default GridProject;
