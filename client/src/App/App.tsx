import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import NotFound from "pages/404";
import Footer from "components/footer/footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
