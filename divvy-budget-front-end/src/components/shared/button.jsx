import "./button.css";

import React from "react";

const Button = ({
  children,
  buttonClicked,
  backgroundColor,
  color,
  borderColor
}) => {
  const styles = {
    backgroundColor: backgroundColor ? backgroundColor : null,
    border: `1px solid ${borderColor ? borderColor : "#4688F1"}`,
    color: color ? color : null
  };

  return (
    <button className="Button" style={styles} onClick={buttonClicked}>
      {children}
    </button>
  );
};

export default Button;
