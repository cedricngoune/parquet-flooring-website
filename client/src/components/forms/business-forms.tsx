import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInput, Subject } from "types/types";
import AtomDatePicker from "components/datepicker/datepicker";

const subjects: Subject[] = [
  { label: "projet", value: "projet" },
  { label: "demande d'informations", value: "information" },
  { label: "partenariat", value: "Partenariat" },
];

const BusinessForm = () => {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0].value);
  const [, setStartDate] = useState<Date>(new Date());

  const {
    register,
    formState: { errors },
    reset,
    watch,
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    watch();
    reset();
  };

  return (
    <form className="w-full px-5 py-5 fade" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-2">
        <div className="mt-8">
          <label className="uppercase text-sm text-black font-light">
            Nom *
          </label>
          <input
            {...register("firstname", {
              pattern: /^[A-Za-z]+$/i,
            })}
            name="firstname"
            className="w-full bg-white text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
            type="text"
            required
          />
          {errors?.firstname?.type === "pattern" && (
            <p className="mb-3 text-normal text-red-500">Format non accepté</p>
          )}
        </div>
        <div className="mt-8">
          <label className="uppercase text-sm text-black font-light">
            Prénom *
          </label>
          <input
            {...register("lastname", {
              pattern: /^[A-Za-z]+$/i,
            })}
            className="w-full bg-white text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
            type="text"
            required
          />
          {errors?.lastname?.type === "pattern" && (
            <p className="mb-3 text-normal text-red-500">Format non accepté</p>
          )}
        </div>
      </div>

      <div className="mt-8">
        <label className="uppercase text-sm text-black font-light">
          Email *
        </label>
        <input
          {...register("email")}
          className="w-full bg-white text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
          type="email"
          required
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
          N° téléphone *
        </label>
        <input
          {...register("telephone")}
          className="w-full bg-white placeholder-text-gray-500  text-sm font-normal mt-2 p-3 rounded-md shadow-md focus:outline-none focus:shadow-outline"
          type="tel"
          placeholder="+33"
        />
        <div className="mt-8">
          <label className="uppercase text-sm text-black font-light">
            Sujet *
          </label>
          <div>
            <select
              value={selectedSubject}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedSubject(e.target.value)
              }
              className="w-full rounded-md shadow-md focus:outline-none focus:shadow-outline cursor-pointer mt-2 p-3"
            >
              {subjects.map((subject, index) => (
                <option key={index} value={subject.value}>
                  {subject.value}
                </option>
              ))}
            </select>
          </div>
          {selectedSubject === subjects[0].value ? (
            <>
              <div className="grid grid-cols-2 gap-5">
                <div className="mt-8 fade">
                  <label className="uppercase text-sm text-black font-light">
                    Surface (m2)
                  </label>
                  <input
                    {...register("area")}
                    type="number"
                    className="w-full rounded-md shadow-md focus:outline-none focus:shadow-outline cursor-pointer mt-2 p-3"
                  />
                </div>
                <div className="mt-8 fade">
                  <label className="uppercase text-sm text-black font-light">
                    Date de démarrage
                  </label>
                  <AtomDatePicker
                    setDate={(date: Date): void => {
                      setStartDate(date);
                    }}
                  />
                </div>
              </div>
              <div className="mt-8 fade">
                <label className="uppercase text-sm text-black font-light">
                  Type de projet:
                </label>
                <input
                  {...register("project_type")}
                  type="text"
                  className="w-full rounded-md shadow-md focus:outline-none focus:shadow-outline  mt-2 p-3"
                />
              </div>
            </>
          ) : selectedSubject === subjects[1].value ? (
            <div className="mt-8 fade">
              <label className="uppercase text-sm text-black font-light">
                Objet de votre message
              </label>
              <input
                {...register("object")}
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
        className="w-full mt-10 px-6 py-5 bg-green-900 hover:bg-white hover:text-black rounded-md shadow-md transition-all duration-75 text-white "
      >
        Envoyer message
      </button>
    </form>
  );
};
export default BusinessForm;
