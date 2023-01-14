import React from "react";
import InfoTagStyle from "./InfoTag.module.css";
import Distance from "/image/icons/distance.png";

const InfoTag = (props) => {
  const { distance } = props;
  return (
    <div className={InfoTagStyle.tag}>
      <img src={Distance} alt="" />
      <div>
        <p>Earth/Jupiter</p>
        <p>{!distance ? "On position" : distance}</p>
      </div>
    </div>
  );
};

export default InfoTag;
