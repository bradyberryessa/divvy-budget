import "./modal.css";

import React from "react";

const Modal = ({ children, show }) => {
  console.log("show", show);
  const classes = show ? "display-block" : "display-none";
  console.log("classes", classes);

  return (
    <div className={`modal ${classes}`}>
      <div className="modal-body">{children}</div>
    </div>
  );
};

export default Modal;
