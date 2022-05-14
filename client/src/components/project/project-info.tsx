import { projectGrid, ProjectProps } from "datas/projects/project-data";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectInfo = () => {
  let params = useParams();
  const [state, setState] = useState<ProjectProps>();
  const { id } = params;

  const getImages = (index: number) => {
    const result = projectGrid.find((project) => project.id === index);
    setState(result);
    return result;
  };
  useEffect(() => {
    getImages(parseInt(id!, 10));
  }, [id]);

  return (
    <div className="min-h-screen">
      {/* <img src={state?.images[0]} alt="background" className="w-full h-64" />
      <div className="w-full min-h-screen grid grid-cols-3">
        {state &&
          state?.images?.map((image, id) => (
            <img src={image} key={id} alt={image} className="w-auto h-auto" />
          ))}
      </div> */}
      <h1 className="text-4xl text-center">Page en cours de contruction...</h1>
    </div>
  );
};
export default ProjectInfo;
