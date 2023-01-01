import React from "react";
import CardStyle from "./CardStyle.module.css";
import Earth from "/image/earth.png";

const Card = (props) => {
  const { planets, backgroundColor } = props;

  return (
    <div
      className={CardStyle.card}
      style={{ backgroundColor: backgroundColor }}
    >
      <img src={Earth} alt="" />
      <p>{planets || "Planets"}</p>
    </div>
  );
};

export default Card;
