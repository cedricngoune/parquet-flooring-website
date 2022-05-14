import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "pages/home";
import NotFound from "pages/404";
import Footer from "components/footer/footer";
import ProjectInfo from "components/project/project-info";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="infos" element={<ProjectInfo />}>
          <Route path=":id" element={<ProjectInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
