import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <div className="w-full h-full min-h-full container-fluid mx-auto font-body font-poppins">
      {/* Banner section  */}
      <div className="bg-hero-cover bg-cover bg-center ">
        <div className="w-full h-screen relative flex justify-center items-center flex-col">
          <div className="box-content text-center ">
            <h1 className="text-7xl font-extrabold text-white">
              Références & Excellence
            </h1>
            <p className="text-3xl text-white font-light my-5">
              Spécialiste dans la pose de parquets et de sols
            </p>
            <Link
              to="section-contact"
              type="button"
              className="bg-transparent cursor-pointer text-2xl border group hover:border-green-900 hover:bg-green-900  border-white transition-all text-white py-3 px-6 my-7"
              spy={true}
              smooth={true}
              activeClass="active"
              offset={-78}
              duration={500}
            >
              Contact
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight className="inline ml-2" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
