import { projectGrid } from "datas/projects/project-data";
import { Link, Outlet } from "react-router-dom";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-4 gap-9 my-12 font-Lato cursor-pointer">
      {projectGrid.map(({ images, title, infos, id }, index) => (
        <Link to={`/infos/${id}`} key={id.toString()}>
          <div className="relative text-center  card-project">
            <img
              src={images[0]}
              className="w-80 card-image"
              loading="lazy"
              alt={title}
            />
            <div className="absolute top-1/2 left-1/2 font-light transform -translate-x-2/4 -translate-y-2/4 card-text ">
              <h4 className="text-white text-2xl ">
                {title}
                <br />
              </h4>
              <h5 className="text-white italic text-md">{infos?.location} </h5>
            </div>
          </div>
        </Link>
      ))}
      <Outlet />
    </div>
  );
};

export default ProjectList;
