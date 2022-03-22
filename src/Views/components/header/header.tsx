import React from "react";

interface IProps {
  name: string;
  url: string;
}

const Header = ({ name, url }: IProps) => {
  return <nav className="flex justify-between items-center"></nav>;
};
export default Header;
