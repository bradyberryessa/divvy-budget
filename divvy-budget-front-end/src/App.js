import "./App.css";

import React, { useEffect } from "react";
import { connect } from "react-redux";

import Category from "./components/category";
import BudgetItemModal from "./components/modals/budgetItemModal";
import CategoryModal from "./components/modals/categoryModal";
import Button from "./components/shared/button";
import * as actions from "./store/actions";

const App = props => {
  const {
    categories,
    modals,
    budgetItems,
    fetchCategories,
    fetchBudgetItems,
    showCategoryModal
  } = props;

  useEffect(() => {
    fetchCategories();
    fetchBudgetItems();
  }, []);

  const categoryModal = modals.showCategoryModal ? (
    <CategoryModal show={modals.showCategoryModal} />
  ) : null;

  const budgetItemModal = modals.showBudgetItemModal ? (
    <BudgetItemModal show={modals.showBudgetItemModal} />
  ) : null;

  return (
    <div className="App">
      <Button buttonClicked={showCategoryModal} backgroundColor="#409cf9">
        + Create new category
      </Button>
      {categories.categories.map(props => {
        const { id, name } = props;
        const filteredBudgetItems = budgetItems.budgetItems.filter(
          item => parseInt(item.categoryId) === id
        );
        return (
          <Category
            key={id}
            id={id}
            name={name}
            category={props}
            budgetItems={filteredBudgetItems}
          />
        );
      })}
      {categoryModal}
      {budgetItemModal}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    modals: state.modals,
    categories: state.categories,
    budgetItems: state.budgetItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showCategoryModal: () => dispatch(actions.showCategoryModal()),
    hideCategoryModal: () => dispatch(actions.hideCategoryModal()),
    fetchCategories: () => dispatch(actions.fetchCategories()),
    fetchBudgetItems: () => dispatch(actions.fetchBudgetItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
