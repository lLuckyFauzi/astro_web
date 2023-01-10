import React from "react";
import ScrolNavStyle from "./ScrolNavStyle.module.css";
import Satelite from "/image/satelite.png";
import Planets from "/image/earth.png";
import Helmet from "/image/icons/helmet.png";

const ScrolNav = () => {
  return (
    <div className={ScrolNavStyle.scrollNav}>
      <div className={ScrolNavStyle.itemActive}>
        <img src={Planets} alt="" />
      </div>
      <div className={ScrolNavStyle.item}>
        <img src={Helmet} alt="" />
      </div>
      <div className={ScrolNavStyle.item}>
        <img src={Satelite} alt="" />
      </div>
    </div>
  );
};

export default ScrolNav;
