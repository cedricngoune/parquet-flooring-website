import React from "react";
// import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import ProjectList from "./project-list";

const SectionTab = () => {
  return (
    <div>
      <ul
        role="tablist"
        aria-orientation="vertical"
        className="font-poppins text-lg font-light  mt-8 text-green-800 flex justify-around images-center"
      >
        {/* {projectGrid.map((tab, index) => (
          <>
            <li
              key={index}
              className={
                "relative cursor-pointer" +
                (selectedTab === index
                  ? " text-white font-normal bg-green-800 py-2 px-3 transition ease-in-out delay-50"
                  : "")
              }
              onClick={() => setSelectedTab(index)}
            >
              <span>{tab.title}</span>
            </li>
            <div>
              <div
                className={
                  selectedTab === index ? "block transition content" : "hidden"
                }
              ></div>
            </div>
          </>
        ))} */}
      </ul>
      <ProjectList />
    </div>
  );
};
export default SectionTab;
