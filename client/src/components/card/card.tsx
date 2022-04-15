import React from "react";
import { IoLocationOutline } from "react-icons/io5";
interface ICardProps {
  image: string;
  className: string;
  location: string;
}

const Card = ({ image, className, location }: ICardProps): JSX.Element => {
  return (
    <div className="flex justify-center font-poppins">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!">
          <img className={className} src={image} alt={image} />
        </a>
        <div className="p-6">
          <div className="text-gray-700 text-base mb-4 flex ">
            <span>
              <IoLocationOutline size={22} />
            </span>
            <p>{location}</p>
          </div>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-white hover:shadow-lg hover:text-black focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Voir
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
