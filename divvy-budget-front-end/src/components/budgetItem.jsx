import "./budgetItem.css";

import numeral from "numeral";
import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions";
import CategoryModal from "./modals/categoryModal";

const BudgetItem = props => {
  const {
    id,
    name,
    amount,
    categoryId,
    showBudgetItemModal,
    deleteBudgetItem,
    editBudgetItemData
  } = props;

  const handleDeleteBudgetItem = () => {
    deleteBudgetItem(id);
  };

  const handlehowBudgetItemModal = () => {
    const budgetItemData = { id, name, amount, categoryId };
    editBudgetItemData(budgetItemData);
    showBudgetItemModal();
  };

  return (
    <>
      <div className="budget-item">
        <div className="budget-item-title" onClick={handlehowBudgetItemModal}>
          {name}
        </div>
        <div className="budget-item-content">
          <div>{numeral(amount).format("$0,0.00")}</div>
          <div
            className="budget-item-delete-button"
            onClick={handleDeleteBudgetItem}
          >
            X
          </div>
        </div>
      </div>
      <CategoryModal />
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    showBudgetItemModal: () => dispatch(actions.showBudgetItemModal()),
    editBudgetItemData: budgetItemData =>
      dispatch(actions.editBudgetItemData(budgetItemData)),
    deleteBudgetItem: budgetItemId =>
      dispatch(actions.deleteBudgetItem(budgetItemId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BudgetItem);
