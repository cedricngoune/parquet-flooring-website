import React from "react";
import Header from "components/header/header";
import Realisations from "./realisations";
import Contact from "./contact";
import iconService from "assets/images/icons/servicesIcon.png";
import iconLocation from "assets/images/icons/location.png";
import iconAtout from "assets/images/icons/atoutsIcon.png";
import { BsArrowRight } from "react-icons/bs";
const divStyle = {
  minHeight: "75vh",
};

const Home = () => {
  return (
    <div className="w-full h-full min-h-full container-fluid mx-auto font-body font-poppins">
      {/* Banner section  */}
      <section className="bg-hero-cover bg-cover bg-center ">
        <Header />
        <div className="w-full h-screen relative flex justify-center items-center flex-col">
          <div className="box-content text-center mb-20">
            <h1 className="text-6xl font-extrabold text-white">
              Références & Excellence
            </h1>
            <p className="text-2xl text-white my-5">
              Spécialiste dans la pose de parquet et sols
            </p>
            <button
              type="button"
              className="bg-transparent border group hover:border-green-900 hover:bg-green-900  border-white transition-all text-white py-3 px-6 my-7"
            >
              Contact
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight className="inline ml-2" />
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* Advantages section */}
      <section className="grid grid-cols-3 my-44  mx-28 gap-6" style={divStyle}>
        <div className="h-auto py-6 px-6 rounded-sm border border-gray-200 bg-white ">
          <div className="flex justify-center mb-5">
            <img
              src={iconAtout}
              height={42}
              width={42}
              alt="services"
              className="text-center"
            />
          </div>
          <h1 className="text-xl font-bold text-center">Atouts</h1>
          <ul className="mt-7 list-disc ">
            <li className="leading-relaxed">
              Un savoir-faire de plus de 15 ans
            </li>
            <li className="leading-relaxed">
              Un poseur expert certifié par Pergo et Panaget Pour les
              professionnels et les particuliers
            </li>
            <li className="leading-relaxed">
              Un accompagnement sur mesure Qualité, propreté et efficacité
            </li>
          </ul>
        </div>
        <div className="h-auto py-6 px-6 rounded-sm border border-gray-200 bg-white ">
          <div className="flex justify-center mb-5">
            <img
              src={iconService}
              height={42}
              width={42}
              alt="services"
              className="text-center"
            />
          </div>
          <h1 className="text-xl font-bold text-center">Prestations</h1>
          <ul className="mt-7 list-disc">
            <li>
              Pose de parquets, sols stratifiés, sols textiles et sols vinyles
            </li>
            <li>Réparation</li>
            <li>Rénovation </li>
            <li>Restauration de parquets anciens</li>
            <li>Ponçage</li>
            <li>Vitrification</li>
            <li> Teinte</li>
            <li> Terrasses</li>
            <li> Habillages muraux bois</li>
            <li> Habillages d'escaliers</li>
          </ul>
        </div>
        <div className="h-auto py-6 px-6 rounded-sm border border-gray-200  bg-white ">
          <div className="flex justify-center mb-5">
            <img
              src={iconLocation}
              height={42}
              width={42}
              alt="services"
              className="text-center"
            />
          </div>
          <h1 className="text-xl font-bold text-center">
            Zones d'interventions
          </h1>
          <ul className="mt-7 list-disc">
            <p> Dans toute la France et pays limitrophes</p>
          </ul>
        </div>
      </section>
      <section className="w-full relative bg-gray-50">
        <h1 className="text-5xl py-7 text-center font-bold">Réalisations</h1>
        <Realisations />
      </section>
      <Contact />
    </div>
  );
};
export default Home;
