import React from "react";
import InfoTagStyle from "./InfoTag.module.css";
import Distance from "/image/icons/distance.png";

const InfoTag = () => {
  return (
    <div className={InfoTagStyle.tag}>
      <img src={Distance} alt="" />
      <div>
        <p>Earth/Jupiter</p>
        <p>745.38 million km</p>
      </div>
    </div>
  );
};

export default InfoTag;
