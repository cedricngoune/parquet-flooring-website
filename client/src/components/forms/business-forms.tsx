import React, { ChangeEvent, useState } from "react";
import DatePicker from "components/datepicker/datepicker";
interface Subject {
  label: string;
  value: string;
}

const subjects: Subject[] = [
  { label: "projet", value: "projet" },
  { label: "demande d'informations", value: "information" },
  { label: "partenariat", value: "Partenariat" },
];

const BusinessForm = () => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [email, setEmail] = useState<string>("");
  const [firstname, setFirstName] = useState<string>("");
  const [lastname, setLastName] = useState<string>("");
  const [message, setMessage] = useState("");
  const [object, setObject] = useState<string>("");
  const [areaValue, setAreaValue] = useState("");

  return (
    <div className="w-full px-5 py-5">
      <div className="grid grid-cols-2 gap-2">
        <div className="mt-8">
          <label className="uppercase text-sm text-black font-light">Nom</label>
          <input
            className="w-full bg-white text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div className="mt-8">
          <label className="uppercase text-sm text-black font-light">
            Prénom
          </label>
          <input
            className="w-full bg-white text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
      </div>

      <div className="mt-8">
        <label className="uppercase text-sm text-black font-light">Email</label>
        <input
          className="w-full bg-white text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
          type="email"
        />
      </div>
      <div className="mt-8">
        <label className="uppercase text-sm text-black font-light">
          Entreprise (facultatif)
        </label>
        <input
          className="w-full bg-white text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
          type="text"
        />
      </div>

      <div className="mt-8">
        <label className="uppercase text-sm text-black font-light">
          N° téléphone
        </label>
        <input
          className="w-full bg-white placeholder-text-gray-500  text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
          type="tel"
          placeholder="+33"
        />
        <div className="mt-8">
          <label className="uppercase text-sm text-black font-light">
            Sujet
          </label>
          <div>
            <select
              className="w-full rounded-md shadow-md focus:outline-none focus:shadow-outline cursor-pointer mt-2 p-3"
              value={selectedSubject}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedSubject(e.target.value)
              }
            >
              {subjects.map((subject, index) => (
                <option key={index} value={subject.value}>
                  {subject.value}
                </option>
              ))}
            </select>
          </div>
          {selectedSubject === subjects[0].value ? (
            <div className="grid grid-cols-2 gap-2">
              <div className="mt-8">
                <label className="uppercase text-sm text-black font-light">
                  Surface (m2)
                </label>
                <input
                  type="number"
                  value={areaValue}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setAreaValue(event.target.value)
                  }
                  className="w-full rounded-md shadow-md focus:outline-none focus:shadow-outline cursor-pointer mt-2 p-3"
                />
              </div>
              <div className="mt-8">
                <label className="uppercase text-sm text-black font-light">
                  Date de démarrage
                </label>
                <DatePicker
                  setDate={(date: Date): void => {
                    setStartDate(date);
                  }}
                />
              </div>
            </div>
          ) : selectedSubject === subjects[1].value ? (
            <div className="mt-8">
              <label className="uppercase text-sm text-black font-light">
                Objet
              </label>
              <input
                className="w-full bg-white text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="mt-8">
          <label className="uppercase text-sm text-black font-light">
            Message
          </label>
          <textarea className="w-full h-32 text-gray-900 mt-2 p-3 rounded-lg shadow-md focus:outline-none focus:shadow-outline"></textarea>
        </div>
      </div>
      <button
        type="submit"
        name="submit"
        className="w-full mt-10 px-6 py-5 bg-green-900 hover:bg-white hover:text-black rounded-md shadow-md transition-all duration-75 text-white "
      >
        Envoyer message
      </button>
    </div>
  );
};
export default BusinessForm;
