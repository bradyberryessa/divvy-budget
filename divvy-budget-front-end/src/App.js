import "./App.css";

import React, { useState } from "react";

import Category from "./components/category";
import CategoryModal from "./components/modals/categoryModal";
import Button from "./components/shared/button";

const App = () => {
  const [showNewCategoryModal, setNewCategoryModal] = useState(false);
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
    const newNewCategory = {
      id: categories[categories.length - 1].id + 1,
      name: newCategory
    };
    setCategories([...categories, newNewCategory]);
    setNewCategoryModal(false);
  };

  return (
    <div className="App">
      {categories.map(({ id, name }) => (
        <Category
          key={id}
          category={name}
          budgetItems={[
            { id: 1, name: "gas", amount: 50 },
            { id: 2, name: "mortgage", amount: 50 },
            { id: 3, name: "food", amount: 50 }
          ]}
        />
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
