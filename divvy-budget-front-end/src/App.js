import "./App.css";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Category from "./components/category";
import CategoryModal from "./components/modals/categoryModal";
import Button from "./components/shared/button";
import http from "./http";
import { hideCategoryModal, showCategoryModal } from "./store/actions";

const App = props => {
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
      <Button buttonClicked={props.showCategoryModal}>
        + Create new category
      </Button>
      <CategoryModal
        show={props.modals.showCategoryModal}
        cancelCategory={cancelCategory}
        saveNewCategory={saveNewCategory}
      />
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return { modals: state };
};

export default connect(
  mapStateToProps,
  {
    showCategoryModal,
    hideCategoryModal
  }
)(App);
