import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../datas/routes";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="bg-white-100 body-font font-poppins shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center pt-5">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {routes.map(({ name, url }, index) => (
                  <Link
                    className="hover:bg-brown text-black px-6 py-2 rounded-md text-lg font-medium"
                    key={index}
                    to={url}
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {routes.map(({ name, url }, index) => (
              <Link
                className="hover:bg-gray-700 text-black px-3 py-2 rounded-md text-sm font-medium"
                key={index}
                to={url}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};
export default Header;
