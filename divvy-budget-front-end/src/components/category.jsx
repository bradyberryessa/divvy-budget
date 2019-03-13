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
    <div
      style={{
        margin: "auto",
        width: "55vw",
        backgroundColor: "white",
        color: "black",
        borderRadius: "5px",
        marginTop: "20px"
      }}
    >
      <div style={{ padding: "25px", position: "relative" }}>
        <div
          style={{
            paddingBottom: "10px"
          }}
        >
          <div
            style={{
              cursor: "pointer",
              fontSize: "1.5em"
            }}
            onClick={() => handleCategoryNameClicked(props)}
          >
            {name}
          </div>
          <div
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 24,
              right: 20
            }}
          >
            <Button buttonClicked={handleDeleteCategory} backgroundColor="red">
              Delete Category
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 20px 10px 0",
            fontWeight: "600"
          }}
        >
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
          Add Budget Item
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
