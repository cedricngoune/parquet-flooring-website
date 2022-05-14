import { projectGrid, ProjectProps } from "datas/projects/project-data";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ProjectInfo = () => {
  let params = useParams();
  const [state, setState] = useState<ProjectProps>();
  const [indexOfImage, setIndexOfImage] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { id } = params;

  const getImages = (index: number): ProjectProps => {
    const result = projectGrid.find((project) => project.id === index);
    setState(result);
    return result!;
  };

  const setOpenAndIndex = (index: number) => {
    setIsOpen(true);
    setIndexOfImage(index);
  };
  useEffect(() => {
    getImages(parseInt(id!, 10));
  }, [id]);

  return (
    <div className="min-h-screen">
      <div className="w-full flex justify-evenly grid-cols-2 ">
        <div className="-mx-7 my-7 grid grid-cols-3 items-center gap-4">
          {state &&
            state?.images?.map((image, id) => (
              <img
                onClick={() => setOpenAndIndex(id)}
                src={image}
                key={id}
                alt={image}
                className="w-72 h-auto object-cover cursor-pointer"
              />
            ))}
        </div>
        <div className="relative flex flex-col">
          <h3 className="text-3xl font-Karla my-7">
            {state && state?.infos?.name}
          </h3>

          <div className="text-xl font-poppins font-light block leading-loose">
            Type de projet: {state?.title} <br />
            Lieu : {state && state?.infos?.location} <br />
            Surface : {state?.infos?.area}
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={state!.images[indexOfImage]}
          nextSrc={state!.images[(indexOfImage + 1) % state!.images.length]}
          prevSrc={
            state!.images[
              (indexOfImage + state!.images.length - 1) % state!.images.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMoveNextRequest={() =>
            setIndexOfImage((indexOfImage + 1) % state!.images.length)
          }
          onMovePrevRequest={() =>
            setIndexOfImage((indexOfImage - 1) % state!.images.length)
          }
        />
      )}
    </div>
  );
};
export default ProjectInfo;
