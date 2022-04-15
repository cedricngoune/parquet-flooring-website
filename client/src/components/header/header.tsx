import React from "react";
import { FiPhone } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";
import "./header.css";

const Header = () => {
  return (
    <div className="flex justify-end text-white mr-5 pt-3">
      <a href="tel:+33 06 45 43 50 03">
        <span className="flex pr-8">
          <FiPhone size={18} style={{ marginTop: "2px" }} />
          <p>+33 06 45 43 50 03</p>
        </span>
      </a>

      <a
        href="https://www.linkedin.com/company/references-excellence/"
        target={"_blank"}
        rel="noreferrer"
        className="hover:blue px-1"
      >
        <span className="flex pr-8">
          <AiFillLinkedin size={20} />
          <p>LinkedIn</p>
        </span>
      </a>
    </div>
  );
};
export default Header;
