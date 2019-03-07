import "./categoryModal.css";

import React, { useState } from "react";

import Modal from "../shared/modal";
import Button from "../shared/button";

const CategoryModal = ({ show, cancelCategory, saveNewCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleChange = event => {
    setCategoryName(event.target.value);
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
      {/* <Button buttonClicked={cancelCategory}>Cancel</Button>
	  <Button buttonClicked={saveNewCategory}>Save</Button> */}

      {/* <Modal show={showNewCategoryModal}>
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
	</Modal> */}
      <Button buttonClicked={cancelCategory}>Cancel</Button>
      <Button buttonClicked={() => saveNewCategory(categoryName)}>Save</Button>
    </Modal>
  );
};

export default CategoryModal;
