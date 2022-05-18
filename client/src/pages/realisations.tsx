import * as React from "react";
import SectionTab from "components/project/section-tab";

const Realisations = () => {
  return (
    <section className="mx-24 relative min-h-screen " id="section-realisations">
      <h1 className="text-beige text-9xl absolute -top-24 font-poppins uppercase tracking-tight z-0 opacity-10 font-black">
        Réalisations
      </h1>
      <div className="relative flex items-center">
        <div className="flex-grow border-t border-black"></div>
        <h2 className="text-2xl text-center font-poppins font-black uppercase text-beige z-10">
          Découvrez nos réalisations
        </h2>
        <div className="flex-grow border-t border-black"></div>
      </div>
      <SectionTab />
    </section>
  );
};
export default Realisations;
