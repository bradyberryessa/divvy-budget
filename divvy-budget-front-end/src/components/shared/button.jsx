import "./button.css";

import React from "react";

const Button = ({ children, buttonClicked, backgroundColor, color }) => {
  const styles = {
    backgroundColor: backgroundColor ? backgroundColor : null,
    color: color ? color : null
  };

  return (
    <button className="Button" style={styles} onClick={buttonClicked}>
      {children}
    </button>
  );
};

export default Button;
