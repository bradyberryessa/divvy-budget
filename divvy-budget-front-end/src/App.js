import "./App.css";

import React, { useState } from "react";

import Button from "./components/shared/button";
import Modal from "./components/shared/modal";
import Category from "./components/category";

const App = () => {
  const [showNewCategoryModal, setNewCategoryModal] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([
    "Housing",
    "Transportation",
    "Groceries"
  ]);

  const createNewCategory = () => {
    setNewCategoryModal(true);
  };

  const cancelCategory = () => {
    setCategoryName("");
    setNewCategoryModal(false);
  };

  const saveNewCategory = () => {
    setCategories([...categories, categoryName]);
    setCategoryName("");
    setNewCategoryModal(false);
  };

  const handleChange = event => {
    setCategoryName(event.target.value);
  };

  return (
    <div className="App">
      {categories.map(category => (
        <Category category={category} />
      ))}
      <Button buttonClicked={createNewCategory}>+ Create new category</Button>
      <Modal show={showNewCategoryModal}>
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
        <Button buttonClicked={cancelCategory}>Cancel</Button>
        <Button buttonClicked={saveNewCategory}>Save</Button>
      </Modal>
    </div>
  );
};

export default App;
