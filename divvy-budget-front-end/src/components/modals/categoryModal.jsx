import "./categoryModal.css";

import React, { useState, useEffect } from "react";

import Modal from "../shared/modal";
import Button from "../shared/button";

const CategoryModal = props => {
  const [categoryName, setCategoryName] = useState("");
  const [editCategoryName, setEditCategoryName] = useState("");

  const { show, cancelCategory, saveNewCategory } = props;

  useEffect(() => {
    if (props.editCategoryName) {
      setEditCategoryName(props.editCategoryName);
    }
  }, []);

  const handleChange = event => {
    if (editCategoryName) {
      setEditCategoryName(event.target.value);
    } else {
      setCategoryName(event.target.value);
    }
  };

  const handleCancelCategory = () => {
    console.log("cancel");
    setCategoryName("");
    cancelCategory();
  };

  const handleSaveNewCategory = () => {
    console.log("save");
    setCategoryName("");
    saveNewCategory(editCategoryName ? editCategoryName : categoryName);
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
            value={editCategoryName ? editCategoryName : categoryName}
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
