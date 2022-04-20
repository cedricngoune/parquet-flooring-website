import React, { useState } from "react";
import Select from "react-select";

const CustomerForm = () => {
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const subjects = ["Projet", "Demande d'informations"];
  return (
    <div className="container-fluid">
      <input type="text" name="name" placeholder="Votre nom *" />
      <input type="text" name="surname" placeholder="Votre prénom *" />
      <input type="email" name="email" placeholder="Votre email *" />
      <input type="text" name="company" placeholder="Entreprise (facultatif)" />
      <input type="text" name="name" placeholder="Votre nom" />
      <input type="tel" name="tel" placeholder="N° tel" />
      <Select
        options={subjects}
        onChange={setSelectedSubject}
        defaultValue={selectedSubject}
      />
    </div>
  );
};
export default CustomerForm;
