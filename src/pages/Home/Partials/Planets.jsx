import React from "react";
import InfoTag from "../../../components/InfoTag/InfoTag";
import ScrolNav from "../../../components/ScrollNav/ScrolNav";

const Planets = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "0px 150px",
      }}
    >
      <ScrolNav />
      <div>
        <p
          style={{
            textAlign: "center",
            margin: "50px 0px",
            color: "white",
            fontSize: "35px",
            fontWeight: "700",
          }}
        >
          Macam Macam Planet
        </p>
      </div>
      <div
        style={{
          color: "white",
        }}
      >
        <p
          style={{
            fontSize: "30px",
            fontWeight: "700",
          }}
        >
          Jupiter
        </p>
        <div
          style={{
            marginTop: "26px",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          <p>Planet ini merupakan planet terbesar di Tata Surya.</p>
          <p
            style={{
              marginTop: "26px",
              width: "400px",
            }}
          >
            Jupiter tidak memiliki dataran, didalamnya hanya terdapat gas.
          </p>
        </div>
        <div>
          <InfoTag />
        </div>
      </div>
    </div>
  );
};

export default Planets;
