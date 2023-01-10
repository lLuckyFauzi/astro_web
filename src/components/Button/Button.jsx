import React from "react";
import ButtonStyle from "./ButtonStyle.module.css";

const Button = (props) => {
  const { children, style } = props;
  return (
    <button style={style} className={ButtonStyle.btnPrimary}>
      {children || "Button"}
    </button>
  );
};

export default Button;
