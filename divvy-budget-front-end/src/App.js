import "./App.css";

import React, { useState } from "react";

import Category from "./components/category";
import CategoryModal from "./components/modals/categoryModal";
import Button from "./components/shared/button";
import Modal from "./components/shared/modal";

const App = () => {
  const [showNewCategoryModal, setNewCategoryModal] = useState(true);
  const [categories, setCategories] = useState([
    { id: 1, name: "Housing" },
    { id: 2, name: "Transportation" },
    { id: 3, name: "Groceries" }
  ]);

  const createNewCategory = () => {
    setNewCategoryModal(true);
  };

  const cancelCategory = () => {
    setNewCategoryModal(false);
  };

  const saveNewCategory = newCategory => {
    setCategories([...categories, newCategory]);
    setNewCategoryModal(false);
  };

  return (
    <div className="App">
      {categories.map(({ id, name }) => (
        <Category key={id} category={name} />
      ))}
      <Button buttonClicked={createNewCategory}>+ Create new category</Button>
      <CategoryModal
        show={showNewCategoryModal}
        cancelCategory={cancelCategory}
        saveNewCategory={saveNewCategory}
      />
    </div>
  );
};

export default App;
