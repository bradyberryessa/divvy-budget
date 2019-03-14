import "./categoryModal.css";
import "./categoryModal.css";

import React from "react";

import Button from "./shared/button";
import Modal from "./shared/modal";

const CategoryModal = ({ show }) => {
  const cancelCategory = () => {};

  const saveNewCategory = () => {};

  return (
    <Modal show={show}>
      <h2>New Category</h2>
      <div className="flex-row">
        <input />
        <input />
      </div>
      <Button buttonClicked={cancelCategory} color="pink" hoverColor="red">
        Cancel
      </Button>
      <Button buttonClicked={saveNewCategory}>Save</Button>
    </Modal>
  );
};

export default CategoryModal;
