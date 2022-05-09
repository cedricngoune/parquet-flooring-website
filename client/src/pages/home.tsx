import React, { Suspense } from "react";
import Banner from "components/banner/banner";
const Realisations = React.lazy(() => import("./realisations"));
const About = React.lazy(() => import("./about"));
const Contact = React.lazy(() => import("./contact"));

const Home = () => {
  return (
    <>
      <Banner />
      <Suspense
        fallback={<div className="text-center text-lg">Chargement...</div>}
      >
        <About />
        <Realisations />
        <Contact />
      </Suspense>
    </>
  );
};
export default Home;
