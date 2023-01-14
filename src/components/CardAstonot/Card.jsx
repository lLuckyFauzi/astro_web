import React from "react";
import CardStyle from "./CardStyle.module.css";
import Helmet from "/helmet.png";

const Card = (props) => {
  const { name, description, profile_path, born, died } = props;
  return (
    <div className={CardStyle.cardAstronot}>
      <div className={CardStyle.profile}>
        <div className={CardStyle.avatar}>
          <img src={profile_path} alt="" />
        </div>
        <div>
          <p>{name}</p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "gray",
            }}
          >
            {born} - {!died ? "Now" : died}
          </p>
        </div>
      </div>
      <div></div>
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
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default Card;
