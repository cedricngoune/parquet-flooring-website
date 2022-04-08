import React from "react";

const Accueil = () => {
  return (
    <div className="w-full container-fluid mx-auto font-body font-poppins my-7">
      <div className="w-full h-52 bg-slate-700 flex justify-center items-center">
        <div className="content-btn">
          <button
            type="button"
            className="bg-zinc-800  text-white text-md leading-6 font-medium py-2 px-3  "
          >
            Contactez moi
          </button>
        </div>
      </div>
      <div className="w-full mt-9">
        <h3 className="text-2xl text-center font-extrabold uppercase">
          À propos de Références & Excellence{" "}
        </h3>
        <div className="flex items-center justify-center mt-9">
          <div className="border-2 border-black h-96  w-96 mr-5">
            <h2 className="text-xl m-[2em] text-center">
              Atouts de Références & Excellence
            </h2>
          </div>
          <div className="border-2 border-black h-96  w-96 mr-5">
            <h2 className="text-xl m-[2em] text-center">Contacts</h2>
          </div>
          <div className="border-2 border-black h-96  w-96 ">
            <h2 className="text-xl m-[2em] text-center">
              Zones d'intervention
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accueil;
