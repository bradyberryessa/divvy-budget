import "./category.css";

import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions";
import BudgetItem from "./budgetItem";
import Button from "./shared/button";

const Category = props => {
  const {
    name,
    budgetItems,
    showCategoryModal,
    editCategoryData,
    id,
    deleteCategory
  } = props;

  const handleCategoryNameClicked = categoryData => {
    showCategoryModal();
    editCategoryData(categoryData);
  };

  const handleDeleteCategory = () => {
    deleteCategory(id, budgetItems);
  };

  const handleShowBudgetItemModal = () => {
    props.showBudgetItemModal(id);
  };

  return (
    <div className="category">
      <div className="category-container">
        <div className="section-padding">
          <div
            className="category-title"
            onClick={() => handleCategoryNameClicked(props)}
          >
            {name}
          </div>
          <div className="category-delete-button-container">
            <div
              className="delete-category-button"
              onClick={handleDeleteCategory}
            >
              Delete Category
            </div>
          </div>
        </div>
        <div className="budget-items-header">
          <div>Budget Items</div>
          <div>Amount</div>
        </div>
        {budgetItems.map(({ id, name, amount }) => (
          <BudgetItem key={id} id={id} name={name} amount={amount} />
        ))}
        <Button
          buttonClicked={handleShowBudgetItemModal}
          backgroundColor="#409cf9"
        >
          + Add Budget Item
        </Button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showBudgetItemModal: categoryId =>
      dispatch(actions.showBudgetItemModal(categoryId)),
    hideBudgetItemModal: () => dispatch(actions.hideBudgetItemModal()),
    showCategoryModal: () => dispatch(actions.showCategoryModal()),
    deleteCategory: (categoryId, budgetItems) =>
      dispatch(actions.deleteCategory(categoryId, budgetItems)),
    editCategoryData: categoryData =>
      dispatch(actions.editCategoryData(categoryData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Category);
