import "./categoryModal.css";

import React, { useState } from "react";

import Modal from "../shared/modal";
import Button from "../shared/button";

const CategoryModal = ({ show, cancelCategory, saveNewCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleChange = event => {
    setCategoryName(event.target.value);
  };

  const handleCancelCategory = () => {
    console.log("cancel");
    setCategoryName("");
    cancelCategory();
  };

  const handleSaveNewCategory = () => {
    console.log("save");
    setCategoryName("");
    saveNewCategory(categoryName);
  };

  return (
    <Modal show={show}>
      <h2>New Category</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label>
          Category Name
          <input
            type="text"
            name="categoryName"
            value={categoryName}
            onChange={handleChange}
          />
        </label>
      </div>
      <Button buttonClicked={handleCancelCategory}>Cancel</Button>
      <Button buttonClicked={handleSaveNewCategory}>Save</Button>
    </Modal>
  );
};

export default CategoryModal;
