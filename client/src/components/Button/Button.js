import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div className="button-wrapper" onClick={props.onPress}>
      <div className="button-label">{props.name}</div>
    </div>
  );
};

export default Button;
