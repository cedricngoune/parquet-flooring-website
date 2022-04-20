import React from "react";
import logo from "assets/images/icons/logo.png";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between text-white mr-5 pt-3">
      <Link to={"/"}>
        <img src={logo} alt="logo" height={35} width={35} className="ml-10" />
      </Link>
    </div>
  );
};
export default Header;
