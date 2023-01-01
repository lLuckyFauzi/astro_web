import React from "react";
import CardStyle from "./CardStyle.module.css";
import Helmet from "/helmet.png";

const Card = () => {
  return (
    <div className={CardStyle.cardAstronot}>
      <div className={CardStyle.profile}>
        <div className={CardStyle.avatar}>
          <img src={Helmet} alt="" />
        </div>
        <p>Neil Amstrong</p>
      </div>
      <hr
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#959494",
          marginTop: "15px",
          border: "none",
        }}
      />
      <p
        style={{
          fontWeight: "400",
          fontSize: "20px",
          marginTop: "20px",
        }}
      >
        Seseorang yang pertama mendarat dibulan pada tahun 1969
      </p>
    </div>
  );
};

export default Card;
