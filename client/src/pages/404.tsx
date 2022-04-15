import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-full font-poppins">
      <h1 className="text-2xl font-bold">Page non trouvée :(</h1>
      <p className="text-black text-lg">
        Retouner à la{" "}
        <Link className="underline cursor-pointer hover:text-blue-500" to={"/"}>
          page d'accueil
        </Link>
      </p>
    </div>
  );
};
export default NotFound;
