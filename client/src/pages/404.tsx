import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-full font-poppins min-h-screen">
      <div className="my-24 text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="text-black text-lg font-light">
          La page que vous recherchez n'existe pas
        </p>
        <p>
          <Link
            className="underline cursor-pointer hover:text-blue-500"
            to={"/"}
          >
            Retour à l'accueil
          </Link>
        </p>
      </div>
    </div>
  );
};
export default NotFound;
