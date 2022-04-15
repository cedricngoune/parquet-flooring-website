import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import Contact from "pages/contact";
import Realisations from "pages/realisations";
import NotFound from "pages/404";
import Footer from "components/footer/footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="realisations" element={<Realisations />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
