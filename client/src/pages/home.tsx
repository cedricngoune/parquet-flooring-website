import React from "react";
import Header from "components/header/header";

import Realisations from "./realisations";
import Contact from "./contact";
const divStyle = {
  minHeight: "75vh",
};

const Home = () => {
  return (
    <div className="relative w-full min-h-full container-fluid mx-auto font-body font-poppins">
      <section className="bg-black relative ">
        <Header />
        <div
          className="w-full flex justify-center items-center flex-col "
          style={divStyle}
        >
          <div className="box-content">
            <h1 className="text-6xl font-extrabold text-white">
              Références & Excellence
            </h1>
          </div>
          <div className="box-border">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 my-8 rounded-full"
            >
              Contact
            </button>
          </div>
        </div>
      </section>
      <div className="flex justify-around z-50 m-10 " style={divStyle}>
        <div className="h-96 py-6 px-6 rounded-xl border border-gray-200 bg-white border-b-8  w-56">
          <h1 className="text-xl font-bold text-center">Atouts</h1>
        </div>
        <div className="h-96 py-6 px-6 rounded-xl border border-gray-200 bg-white border-b-8  w-56">
          <h1 className="text-xl font-bold text-center">Prestations</h1>
        </div>
        <div className="h-96 py-6 px-6 rounded-xl border border-gray-200 border-b-8  bg-white">
          <h1 className="text-xl font-bold text-center">
            Zones d'interventions
          </h1>
        </div>
      </div>
      <div className="w-full relative bg-gray-50">
        <h2 className="text-2xl py-7 text-center font-bold">
          Quelques réalisations
        </h2>
        <Realisations />
      </div>
      <Contact />
    </div>
  );
};
export default Home;
