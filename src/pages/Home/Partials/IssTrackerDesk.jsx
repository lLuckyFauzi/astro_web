import React from "react";

const IssTracker = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          fontWeight: "700",
          fontSize: "35px",
          color: "white",
          textAlign: "end",
        }}
      >
        <p
          style={{
            color: "#0466C8",
          }}
        >
          ISS
        </p>
        <p>Tracker</p>
      </div>
      <div
        style={{
          color: "white",
        }}
      >
        <p>
          <b>Apa itu ISS Satellite?</b> sebuah stasiun luar <br /> angkasa
          modular yang terletak di orbit bumi rendah.
        </p>
        <hr style={{}} />
      </div>
    </div>
  );
};

export default IssTracker;
