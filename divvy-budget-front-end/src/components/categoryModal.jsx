import "./categoryModal.css";

import React from "react";

import Modal from "./shared/modal";
import Button from "./shared/button";

const CategoryModal = () => {
  return (
    <Modal>
      <h2>New Category</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input />
        <input />
      </div>
      <Button buttonClicked={cancelCategory}>Cancel</Button>
      <Button buttonClicked={saveNewCategory}>Save</Button>
    </Modal>
  );
};

export default CategoryModal;
