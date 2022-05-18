import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const GoBack = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="inline-flex cursor-pointer" onClick={() => navigate(-1)}>
        <span>
          <IoChevronBackOutline size={25} />{" "}
        </span>
        <p className="text-base font-light">Retour</p>
      </div>
    </>
  );
};
export default GoBack;
