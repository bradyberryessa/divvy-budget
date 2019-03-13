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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <div style={{ cursor: "pointer" }} onClick={showBudgetItemModal}>
          {name}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <div>{amount}</div>
          <div
            style={{ color: "red", marginLeft: "10px", cursor: "pointer" }}
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
