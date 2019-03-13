import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions";
import BudgetItem from "./budgetItem";
import Button from "./shared/button";

const Category = props => {
  const { name, budgetItems, showCategoryModal, editCategoryData } = props;

  const handleCategoryNameClicked = categoryData => {
    showCategoryModal();
    editCategoryData(categoryData);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "60vw",
        backgroundColor: "grey",
        borderRadius: "5px",
        marginTop: "20px"
      }}
    >
      <div
        style={{ cursor: "pointer" }}
        onClick={() => handleCategoryNameClicked(props)}
      >
        {name}
      </div>
      {budgetItems.map(({ id, name, amount }) => (
        <BudgetItem key={id} id={id} name={name} amount={amount} />
      ))}
      <Button buttonClicked={props.showBudgetItemModal}>Add Budget Item</Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showBudgetItemModal: () => dispatch(actions.showBudgetItemModal()),
    hideBudgetItemModal: () => dispatch(actions.hideBudgetItemModal()),
    showCategoryModal: () => dispatch(actions.showCategoryModal()),
    editCategoryData: categoryData =>
      dispatch(actions.editCategoryData(categoryData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Category);
