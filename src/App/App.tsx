import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header/header";
import Accueil from "../pages/accueil";
import Contact from "../pages/contact";
import Realisations from "../pages/realisations";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="realisations" element={<Realisations />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
