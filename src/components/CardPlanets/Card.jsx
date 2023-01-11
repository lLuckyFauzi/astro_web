import React from "react";
import CardStyle from "./CardStyle.module.css";
import Earth from "/image/earth.png";

const Card = (props) => {
  const { backgroundColor, name, url, key } = props;

  return (
    <div
      className={CardStyle.card}
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={url} key={key} alt="" />
      </div>
      <div>
        <p>{name || "Planets"}</p>
      </div>
    </div>
  );
};

export default Card;
