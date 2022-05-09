import React, { useState, useEffect } from "react";
import { projectData, ProjectProps } from "datas/projects/project-data";

const SectionTab = () => {
  const [data, setData] = useState<ProjectProps[]>(projectData);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <div>
      <ul className="font-poppins text-lg font-light mt-8 text-green-800 flex justify-between items-center">
        {projectData.map((tab, index) => (
          <li key={index} className="cursor-pointer">
            {tab.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default SectionTab;
