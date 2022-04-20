import React, { ChangeEvent, useState } from "react";

import { ImLinkedin2 } from "react-icons/im";
import { FiPhone, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import Radiobutton from "components/radio-button/radio-button";
import CustomerForm from "components/forms/customer-form";
import BusinessForm from "components/forms/business-forms";

type TKeyword = "Particuliers" | "Professionnels";

const Contact = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>("");
  const keywords: Array<string> = ["Particuliers", "Professionnels"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedKeyword(value);
  };

  return (
    <div className="grid grid-cols-2 h-96 mx-20 my-44">
      <div className="border border-gray-200 drop-shadow-2xl bg-white">
        <div className="my-10 text-center">
          <h2 className="text-3xl">Mes coordonnées</h2>{" "}
        </div>
        <div className="mx-5">
          <span className="flex pr-10 my-10">
            <FiPhone size={22} className="mt-1 mr-5" />
            <p className="text-lg">06 45 43 50 03</p>
          </span>
          <span className="flex pr-10">
            <FiMail size={22} className="mt-1 mr-5" />
            <a
              href="mailto:referencesexcellence@gmail.com"
              className="text-lg hover:text-blue-500"
            >
              referencesexcellence@gmail.com
            </a>
          </span>
          <span className="flex pr-10 my-10">
            <IoLocationOutline size={22} className="mt-1 mr-5" />
            <address className="text-lg">Cabris (06530)</address>
          </span>
          <span className="flex pr-10 my-10">
            <ImLinkedin2 size={17} className="mt-1 mr-5 " />
            <a
              href="https://www.linkedin.com/company/references-excellence/"
              target={"_blank"}
              className="text-lg hover:text-blue-500"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </div>
      <div className=" bg-gray-200">
        <div className="my-10 text-center">
          <h2 className="text-3xl">Vous êtes :</h2>{" "}
        </div>
        <fieldset className="my-10 flex justify-around form-check">
          {keywords.map((keyword, index) => (
            <div key={index}>
              <Radiobutton
                label={keyword}
                id={keyword}
                value={keyword}
                onCheck={handleChange}
              />
            </div>
          ))}
        </fieldset>
        {selectedKeyword === "Particuliers" ? (
          <CustomerForm />
        ) : selectedKeyword === "Professionnels" ? (
          <BusinessForm />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Contact;
