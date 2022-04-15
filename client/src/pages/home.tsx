import Card from "components/card/card";
import React from "react";
import terrasseImg from "datas/images/terrase camaru-cabris/cover.jpg";
import upstairImg from "datas/images/GODET-chene contre collé-carrieres sur seine/cover.jpg";
import floorImg from "datas/images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/cover.jpg";
import Header from "components/header/header";

const divStyle = {
  minHeight: "75vh",
};
const Home = () => {
  return (
    <div className="w-full min-h-full container-fluid mx-auto font-body font-poppins">
      <div className="bg-black">
        <Header />
        <div
          className="w-full flex justify-center items-center flex-col"
          style={divStyle}
        >
          <div className="relative">
            <h1 className="text-6xl font-extrabold text-white">
              Références & Excellence
            </h1>
          </div>
          <div className="content-btn">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 my-8 rounded-full"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-5 " style={divStyle}>
        <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white border-b-8  w-56">
          <h1 className="text-xl font-bold text-center">Atouts</h1>
        </div>
        <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white border-b-8  w-56">
          <h1 className="text-xl font-bold text-center">Prestations</h1>
        </div>
        <div className="h-full py-6 px-6 rounded-xl border border-gray-200 border-b-8  bg-white">
          <h1 className="text-xl font-bold text-center">
            Zones d'interventions
          </h1>
        </div>
      </div>
      <div className="w-full relative bg-gray-50">
        <h2 className="text-2xl mt-14  text-center font-bold">
          Nos réalisations
        </h2>
        <div className="py-5 px-5 flex flex-wrap justify-around items-start">
          <Card
            className="rounded-t-lg object-cover h-48 w-96 flex-auto"
            image={terrasseImg}
            location="Cabris (06)"
          />
          <Card
            className="rounded-t-lg object-cover h-48 w-96"
            image={upstairImg}
            location="Carrières sur seine (78)"
          />
          <Card
            className="rounded-t-lg object-cover h-48 w-96"
            image={floorImg}
            location="Marseille (13)"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
