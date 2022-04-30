import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import NotFound from "pages/404";
import Footer from "components/footer/footer";
import PageInfo from "components/page-info/page-info";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/page-detail" element={<PageInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
