import React from "react";
import HomeFeature from "./Partials/HomeFeature";
import LandingView from "./Partials/LandingView";

const Home = () => {
  return (
    <>
      <div>
        <LandingView />
      </div>
      <div>
        <HomeFeature />
      </div>
    </>
  );
};

export default Home;
