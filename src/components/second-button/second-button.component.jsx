import React from "react";
import "./second-button.style.css";

const SecondButton = ({ children, ...otherProps }) => {
  return (
    <button className={"second-button"} {...otherProps}>
      {children}
    </button>
  );
};

export default SecondButton;
