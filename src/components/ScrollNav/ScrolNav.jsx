import React, { useEffect, useState } from "react";
import { Router, useNavigate, useNavigation } from "react-router-dom";
import ScrolNavStyle from "./ScrolNavStyle.module.css";
import Satelite from "/image/satelite.png";

const ScrolNav = () => {
  const [active, setActive] = useState(0);
  const router = useNavigate();

  const icons = [
    "/image/earth.png",
    "/image/icons/helmet.png",
    "/image/satelite.png",
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      if (scroll >= 0 && scroll < 1565) {
        setActive(1);
      } else if (scroll >= 1565 && scroll < 3249) {
        setActive(2);
      } else {
        setActive(3);
      }
    });
  });

  return (
    <div className={ScrolNavStyle.scrollNav}>
      {icons.map((el, idx) => (
        <a
          href={"#planet"}
          key={idx}
          className={
            idx == active ? ScrolNavStyle.itemActive : ScrolNavStyle.item
          }
          // onClick={() => (idx == active ? alert("active") : router("#planet"))}
        >
          <img src={el} alt="" />
        </a>
      ))}
    </div>
  );
};

export default ScrolNav;
