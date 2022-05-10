import React, { useState, useEffect } from "react";
import { projectData, ProjectProps } from "datas/projects/project-data";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const SectionTab = () => {
  /** useStates */
  const [data, setData] = useState<ProjectProps[]>(projectData);
  const [selectedTab, setSelectedTab] = React.useState<number>(0);
  const [indexImage, setIndexImage] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);

  /** useEffect(s) */
  useEffect(() => {
    setData(data);
  }, [data]);

  const openModalAndSetIndex = (index: number) => {
    setIndexImage(index);
    setShowModal(!showModal);
    return;
  };
  const { images } = projectData[selectedTab];

  return (
    <div>
      <ul
        role="tablist"
        aria-orientation="vertical"
        className="font-poppins text-lg font-light mt-8 text-green-800 flex justify-around items-center"
      >
        {projectData.map((tab, index) => (
          <>
            <li
              key={index}
              className={
                "relative cursor-pointer" +
                (selectedTab === index
                  ? " text-white bg-green-800 py-2 px-3 transition ease-in-out delay-50"
                  : "")
              }
              onClick={() => setSelectedTab(index)}
            >
              <span>{tab.title}</span>
            </li>
            <div>
              <div className="grid grid-cols-4 items-center">
                <div
                  className={
                    selectedTab === index
                      ? "block transition ease-in-out delay-150"
                      : "hidden"
                  }
                ></div>
              </div>
            </div>
          </>
        ))}
      </ul>
      <div className="grid grid-cols-5 items-center mt-9">
        {images.map((image, index) => (
          <div className="relative">
            <img
              src={image}
              key={index}
              className="h-80 w-80 object-contain cursor-pointer"
              alt={"imag"}
              onClick={() => openModalAndSetIndex(index)}
            />
            <p>{}</p>
          </div>
        ))}
      </div>
      {showModal && (
        <Lightbox
          mainSrc={images[indexImage]}
          nextSrc={images[(indexImage + 1) % images.length]}
          prevSrc={images[(indexImage + images.length - 1) % images.length]}
          onCloseRequest={() => setShowModal(false)}
          onMovePrevRequest={() =>
            setIndexImage((indexImage + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setIndexImage((indexImage + images.length + 1) % images.length)
          }
        />
      )}
    </div>
  );
};
export default SectionTab;
