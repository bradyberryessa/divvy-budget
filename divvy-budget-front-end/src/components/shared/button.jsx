import "./button.css";

import React from "react";

const Button = ({ children, buttonClicked }) => {
  return (
    <button className="Button" onClick={buttonClicked}>
      {children}
    </button>
  );
};

export default Button;
