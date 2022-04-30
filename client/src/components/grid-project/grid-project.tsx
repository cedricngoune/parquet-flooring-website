import React, { useState, useEffect } from "react";
import { projectData, ProjectProps } from "datas/projects/project-data";
import Modal from "components/modal/modal";

const GridProject = () => {
  const [data, setData] = useState<ProjectProps[]>(projectData);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <>
      <div className="grid grid-cols-4 gap-8 mx-14">
        {data.map(({ cover, title, images, infos }, index) => (
          <div
            className="w-full h-96 shadow-2xl overflow-hidden text-center relative"
            key={index}
          >
            <img
              onClick={() => {
                setShowModal(!showModal);
              }}
              className="data-img cursor-pointer  "
              src={cover}
              alt={title}
              title={title}
            />
            <Modal
              onClose={() => setShowModal(false)}
              images={images}
              infos={infos}
              showModal={showModal}
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default GridProject;
