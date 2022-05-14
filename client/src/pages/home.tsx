import React, { Suspense } from "react";
import Banner from "components/banner/banner";
import { FaAngleUp } from "react-icons/fa";
import spinner from "datas/images/icons/spinner.gif";
const Realisations = React.lazy(() => import("./realisations"));
const About = React.lazy(() => import("./about"));
const Contact = React.lazy(() => import("./contact"));

const Home = () => {
  return (
    <>
      <Banner />
      <Suspense
        fallback={
          <div className="text-center text-lg">
            <img src={spinner} alt="Chargement..." />{" "}
          </div>
        }
      >
        <About />
        <Realisations />
        <Contact />
      </Suspense>
      <FaAngleUp className="float-right" />
    </>
  );
};
export default Home;
