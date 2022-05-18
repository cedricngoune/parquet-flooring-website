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
    <div className="min-h-screen fade mx-24 my-20 overflow-hidden">
      <div className="relative ">
        <h1 className="text-beige xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl font-poppins uppercase tracking-tight opacity-10 font-black">
          {state?.title}
        </h1>
        <div className="relative md:text-lg sm:text-xs -mt-6 flex items-center">
          <div className="flex-grow border-t border-black"></div>
          <h2 className="text-2xl text-center font-poppins font-black uppercase text-beige ">
            {state?.infos?.name}
          </h2>
          <div className="flex-grow border-t border-black"></div>
        </div>
      </div>
      <div className="w-full xl:mt-14 lg:flex   xl:flex justify-between  ">
        <div className=" my-7 grid grid-cols-3 items-center gap-4">
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
        <div className="relative flex flex-col mr-20 mt-5">
          <div className="text-xl font-poppins font-light block leading-loose">
            Prestation(s): <br />
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
