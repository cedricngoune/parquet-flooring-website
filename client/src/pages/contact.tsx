import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className=" py-6 px-6 rounded-xl border border-gray-200 drop-shadow-2xl bg-white  w-7/12">
        <h1 className="text-xl font-bold text-center">Prenons contact </h1>
        <form id="form" className="mt-9">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="form-input px-3 py-2 rounded-md  border border-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="form-input px-3 py-2 rounded-md border border-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input px-3 py-2 rounded-md border border-black"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone">
                <div className="flex align-items">
                  Phone
                  <span className="ml-auto opacity-75">Optional</span>
                </div>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input px-3 py-2 rounded-md border border-black"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input px-3 py-2 rounded-md border border-black"
                required
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="subject">
                <div className="flex align-items">
                  Message
                  <span className="ml-auto opacity-75">
                    Max. 500 characters
                  </span>
                </div>
              </label>
              <textarea
                maxLength={500}
                rows={4}
                id="subject"
                name="subject"
                className="form-input px-3 py-2 rounded-md border border-black"
                required
              />
            </div>
          </div>
          <div className="flex justify-center py-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 my-8 rounded-full"
            >
              Envoyer votre message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
