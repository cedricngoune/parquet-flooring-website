import * as React from "react";
import Card from "components/card/card";
import terrasseImg from "datas/images/terrase camaru-cabris/cover.jpg";
import upstairImg from "datas/images/GODET-chene contre collé-carrieres sur seine/cover.jpg";
import floorImg from "datas/images/VIEUX CAMPEUR/MARSEILLE-magasin-sol stratifié pergo/cover.jpg";

const Realisations = () => {
  return (
    <div className="container-fluid">
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
  );
};
export default Realisations;
