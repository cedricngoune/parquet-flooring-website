import React, { useState } from "react";
import Radiobutton from "components/radio-button/radio-button";
import CustomerForm from "components/forms/customer-form";
import BusinessForm from "components/forms/business-forms";

const Contact = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>("");
  const keywords: Array<string> = ["Un particulier", "Un professionnel"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedKeyword(value);
  };

  return (
    <>
      <section title="section-contact" id="section-contact">
        <div className="grid grid-cols-2  min-h-screen mx-20 my-36">
          <div className="w-full ">
            <img
              src="images/sideImg.jpeg"
              alt=""
              className="bg-side-img w-full h-full bg-center object-cover bg-no-repeat"
            />
          </div>

          <div className=" bg-gray-100 ">
            <div className="my-10 text-center">
              <h2 className="text-3xl">Vous êtes ?:</h2>{" "}
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
            {selectedKeyword === "Un particulier" ? (
              <CustomerForm />
            ) : selectedKeyword === "Un professionnel" ? (
              <BusinessForm />
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
