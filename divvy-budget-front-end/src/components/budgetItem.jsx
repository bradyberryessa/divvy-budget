import "./budgetItem.css";

import numeral from "numeral";
import React from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions";
import CategoryModal from "./modals/categoryModal";

const BudgetItem = props => {
  const { name, amount, showBudgetItemModal, id, deleteBudgetItem } = props;

  const handleDeleteBudgetItem = () => {
    deleteBudgetItem(id);
  };

  return (
    <>
      <div className="budget-item">
        <div className="budget-title" onClick={showBudgetItemModal}>
          {name}
        </div>
        <div className="budget-content">
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
    deleteBudgetItem: budgetItemId =>
      dispatch(actions.deleteBudgetItem(budgetItemId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(BudgetItem);
