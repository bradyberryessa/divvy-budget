import "./App.css";

import React, { useEffect, useState } from "react";

import Category from "./components/category";
import CategoryModal from "./components/modals/categoryModal";
import Button from "./components/shared/button";
import http from "./http";

const App = () => {
  const [showNewCategoryModal, setNewCategoryModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [budgetItems, setBudgetItems] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data: fetchedCategories } = await http.get("/categories");
    const { data: fetchedBudgetItems } = await http.get("/budget_items");

    setCategories(fetchedCategories);
    setBudgetItems(fetchedBudgetItems);
  };

  const handleUpdateCategories = updatedCategory => {
    const updatedCategories = categories.map(category =>
      updatedCategory.id === category.id ? updatedCategory : category
    );
    setCategories(updatedCategories);
  };

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

  const addBudgetItem = () => {
    http
      .post("/budget_items", { name: "BI", amount: 1506930, categoryId: 1 })
      .then(response => {
        console.log(response.data);
        setBudgetItems([...budgetItems, response.data]);
      });
  };

  return (
    <div className="App">
      {categories.map(({ id, name }) => {
        const filteredBudgetItems = budgetItems.filter(
          item => parseInt(item.categoryId) === id
        );
        return (
          <Category
            key={id}
            id={id}
            name={name}
            budgetItems={filteredBudgetItems}
            updateCategories={handleUpdateCategories}
          />
        );
      })}
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
