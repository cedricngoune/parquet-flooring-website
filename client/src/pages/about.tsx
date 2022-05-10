import * as React from "react";
import iconAtout from "assets/images/icons/atoutIcon.png";
import iconMap from "assets/images/icons/locationIcon.png";
import imgFrance from "assets/images/icons/map_france.png";
import iconService from "assets/images/icons/serviceIcon.png";

const divStyle = {
  minHeight: "100vh",
};

const About = () => {
  return (
    <section
      title="section-introduction"
      id="section-introduction"
      className="my-44 relative min-h-full font-body font-Lato mx-24"
      style={divStyle}
    >
      <h1 className="text-beige text-9xl absolute -top-24 font-poppins uppercase tracking-tight z-0 opacity-10 font-black">
        A propos
      </h1>
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-black "></div>
        <h2 className="text-2xl text-center font-poppins font-black uppercase text-beige z-10">
          Découvrez Références & Excellence
        </h2>
        <div className="flex-grow border-t border-black "></div>
      </div>
      <div className="grid grid-cols-3 place-content-center my-32 gap-2">
        <div className="relative w-11/12 py-6 px-6 rounded-lg border-2 border-green-800 bg-white z-0">
          <h1 className="text-2xl font-semibold text-center mt-3 uppercase text-beige">
            Atouts
          </h1>

          <div className="mt-7">
            <ul className="mx-6 font-poppins  text-lg to-black font-light leading-8">
              <li className="list-disc">Plus de 15 ans d'expériences</li>
              <li className="list-disc">
                Une expertise certifiée par Pergo et Panaget
              </li>
              <li className="list-disc">
                Pour les professionnels et particuliers
              </li>
              <li className="list-disc">Un accompagnement sur mesure</li>
              <li className="list-disc">qualité, proreté et efficacité</li>
            </ul>
            <p className="font-light text-2xl  leading-9"></p>
          </div>
        </div>
        <div className="relative w-11/12  py-6 px-6 rounded-lg border-2 border-green-800 bg-white z-0 ">
          <h1 className="text-2xl font-semibold text-center mt-3 uppercase text-beige">
            Prestations
          </h1>
          <div className="mt-7">
            <ul className="mx-6 font-poppins text-lg to-black font-light leading-8">
              <li className="list-disc">
                Pose de sols ( parquet, stratifié, textiles et vinyles)
              </li>
              <li className="list-disc">
                Réparation, rénovaion et restauration de parquets anciens
              </li>
              <li className="list-disc">
                Ponçage, vitrification, huilage et teinte
              </li>
              <li className="list-disc">Terrasses</li>
              <li className="list-disc">Habillages muraux et escaliers</li>
            </ul>
          </div>
        </div>
        <div className="relative w-11/12  py-6 px-6 rounded-lg border-2 border-green-800 bg-white z-0">
          <h1 className="text-2xl font-semibold text-center mt-3 uppercase text-beige">
            Zones d'interventions
          </h1>

          <div className="text-center relative">
            <img
              src={imgFrance}
              className="object-contain h-96 w-auto"
              alt="Atout"
            />
            <p className="font-light text-lg absolute top-32 left-0 right-0 ">
              Dans toute la France
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
