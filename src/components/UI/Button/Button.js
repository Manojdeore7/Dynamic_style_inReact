import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="button"
      onClick={props.onClick}
      style={{ backgroundColor: !props.back ? "lightgreen" : "purple" }}
    >
      {props.children}
    </button>
  );
};

export default Button;
