import React from "react";
import ScrolNavStyle from "./ScrolNavStyle.module.css";
import Satelite from "/image/satelite.png";

const ScrolNav = () => {
  return (
    <div className={ScrolNavStyle.scrollNav}>
      <div className={ScrolNavStyle.itemActive}>
        <img src={Satelite} alt="" />
      </div>
      <div className={ScrolNavStyle.item}>
        <img src={Satelite} alt="" />
      </div>
      <div className={ScrolNavStyle.item}>
        <img src={Satelite} alt="" />
      </div>
    </div>
  );
};

export default ScrolNav;
