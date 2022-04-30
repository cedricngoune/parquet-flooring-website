import React from "react";
import Realisations from "./realisations";
import Contact from "./contact";
import { BsArrowRight } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

import iconAtout from "assets/images/icons/atoutIcon.png";
import iconLocation from "assets/images/icons/locationIcon.png";
import iconMap from "assets/images/icons/map_france.png";
import iconService from "assets/images/icons/serviceIcon.png";

const divStyle = {
  minHeight: "75vh",
};

const Home = () => {
  return (
    <div className="w-full h-full min-h-full container-fluid mx-auto font-body font-poppins">
      {/* Banner section  */}
      <section className="bg-hero-cover bg-cover bg-center ">
        <div className="w-full h-screen relative flex justify-center items-center flex-col">
          <div className="box-content text-center ">
            <h1 className="text-7xl font-extrabold text-white">
              Références & Excellence
            </h1>
            <p className="text-3xl text-white my-5">
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
      </section>
      {/* Advantages section */}
      <section
        title="section-introduction"
        id="section-introduction"
        className="grid grid-cols-3 my-44  mx-28 gap-6 ont-body font-Montserrat"
        style={divStyle}
      >
        <div className="h-auto py-6 px-6 rounded-md border-2 border-black bg-white ">
          <div className="flex justify-center">
            <img src={iconAtout} alt="Atout" />
          </div>
          <h1 className="text-4xl font-semibold text-center mt-3">Atouts</h1>

          <div className="mt-20">
            <p className="font-light text-lg">
              Un savoir-faire de plus de 15 ans
            </p>

            <p className="font-light text-lg">
              Un poseur expert certifié par Pergo et Panaget Pour les
              professionnels et les particuliers
            </p>
            <p className="font-light text-lg">
              Un accompagnement sur mesure Qualité, propreté et efficacité
            </p>
          </div>
        </div>
        <div className="h-auto py-6 px-6 rounded-md border-2 border-black bg-white ">
          <div className="flex justify-center">
            <img src={iconService} alt="Prestations" />
          </div>
          <h1 className="text-4xl font-semibold text-center mt-3">
            Prestations
          </h1>
          <div className="mt-20">
            <p className="font-light text-lg">
              Pose de parquets, sols stratifiés, sols textiles et sols vinyles
            </p>
            <p className="font-light text-lg">Réparation</p>
            <p className="font-light text-lg">Rénovation</p>
            <p className="font-light text-lg">
              Restauration deparquets anciens
            </p>
            <p className="font-light text-lg">Ponçage</p>
            <p className="font-light text-lg">Vitrification </p>
            <p className="font-light text-lg">Teinte</p>
            <p className="font-light text-lg">Terrasses</p>
            <p className="font-light text-lg"> Habillages muraux bois</p>
            <p className="font-light text-lg"> Habillages d'escaliers</p>
          </div>
        </div>
        <div className="h-auto py-6 px-6 rounded-md border-2 border-black  bg-white ">
          <div className="flex justify-center">
            <img src={iconLocation} alt="location" />
          </div>
          <h1 className="text-4xl font-semibold text-center mt-3">
            Zones d'interventions
          </h1>

          <div className="flex justify-center">
            <img
              src={iconMap}
              className="object-contain h-auto w-auto"
              alt="Atout"
            />
          </div>
        </div>
      </section>
      <section className="w-full relative bg-gray-50" id="section-realisations">
        <h1 className="text-5xl py-7 text-center font-bold">Réalisations</h1>
        <Realisations />
      </section>
      <section title="section-contact" id="section-contact">
        <Contact />
      </section>
    </div>
  );
};
export default Home;
