import React from "react";
import AstronotList from "./Partials/AstronotList";
import HomeFeature from "./Partials/HomeFeature";
import IssTracker from "./Partials/IssTrackerDesk";
import LandingView from "./Partials/LandingView";
import Planets from "./Partials/Planets";
import Sun from "/image/sun.png";

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
      <div
        style={{
          marginTop: "100px",
          minHeight: "100vh",
        }}
      >
        <p
          style={{
            fontWeight: "700",
            fontSize: "37px",
            textAlign: "center",
            color: "white",
            marginBottom: "45px",
          }}
        >
          Astronot
        </p>
        <div>
          <AstronotList />
        </div>
      </div>
      <div
        style={{
          minHeight: "100vh",
          padding: "100px 0px",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "35px",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          ISS Tracker
        </p>
        <div>
          <div>
            <img src={Sun} alt="" height={"150px"} />
          </div>
          <IssTracker />
        </div>
      </div>
    </>
  );
};

export default Home;
