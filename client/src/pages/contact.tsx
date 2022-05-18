import React, { useState } from "react";
import Radiobutton from "components/radio-button/radio-button";
import CustomerForm from "components/forms/customer-form";
import BusinessForm from "components/forms/business-forms";
import contact_img from "datas/images/sideImg.jpeg";

const Contact = () => {
  const [selectedKeyword, setSelectedKeyword] = useState<string>("");
  const keywords: Array<string> = ["Un particulier", "Un professionnel"];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedKeyword(value);
  };

  return (
    <>
      <section
        title="section-contact"
        id="section-contact"
        className="mx-24 relative min-h-screen my-88"
      >
        <h1 className="text-beige text-9xl absolute -top-24 font-poppins uppercase tracking-tight z-0 opacity-10 font-black">
          Contact
        </h1>
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-black"></div>
          <h2 className="text-2xl text-center font-poppins font-black uppercase text-beige z-10">
            Contactez nous
          </h2>
          <div className="flex-grow border-t border-black"></div>
        </div>
        <div className="grid grid-cols-2  min-h-screen  my-36">
          <div className=" bg-white font-poppins ">
            <div className="my-10 text-center">
              <h2 className="text-3xl">Vous êtes ?:</h2>{" "}
            </div>
            <fieldset className="my-10 flex justify-around form-check">
              {keywords.map((keyword, index) => (
                <div key={index} className="font-light">
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
          <div className="w-9/12 h-auto ml-56 right-9 ">
            <img
              src={contact_img}
              alt=""
              className="bg-side-img w-full h-full bg-center object-cover bg-no-repeat"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
