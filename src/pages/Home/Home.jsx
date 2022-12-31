import React from "react";
import HomeFeature from "./Partials/HomeFeature";
import LandingView from "./Partials/LandingView";
import Planets from "./Partials/Planets";

const Home = () => {
  return (
    <>
      <div>
        <LandingView />
      </div>
      <div>
        <HomeFeature />
      </div>
      <div>
        <Planets />
      </div>
    </>
  );
};

export default Home;
