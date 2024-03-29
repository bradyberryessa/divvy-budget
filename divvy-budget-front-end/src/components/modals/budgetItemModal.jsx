import * as _ from "lodash";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Button from "../shared/button";
import Modal from "../shared/modal";

const BudgetItemModal = props => {
  const [budgetItemName, setBudgetItemName] = useState("");
  const [budgetItemAmount, setBudgetItemAmount] = useState("");

  const {
    show,
    addBudgetItem,
    updateBudgetItem,
    hideBudgetItemModal,
    categoryId,
    modals,
    editBudgetItemData
  } = props;

  useEffect(() => {
    if (!_.isEmpty(modals.budgetItemData)) {
      setBudgetItemName(modals.budgetItemData.name);
      setBudgetItemAmount(modals.budgetItemData.amount);
    }
  }, []);

  const handleBudgetItemNameChange = event => {
    setBudgetItemName(event.target.value);
  };

  const handleBudgetItemAmountChange = event => {
    setBudgetItemAmount(event.target.value);
  };

  const handleCancelBudgetItem = () => {
    setBudgetItemName("");
    setBudgetItemAmount(0);
    editBudgetItemData({});
    hideBudgetItemModal();
  };

  const handleAddBudgetItem = () => {
    if (!_.isEmpty(modals.budgetItemData)) {
      const updatedBudgetItem = {
        ...modals.budgetItemData,
        name: budgetItemName,
        amount: budgetItemAmount
      };
      updateBudgetItem(updatedBudgetItem);
    } else {
      const newBudgetItem = {
        name: budgetItemName,
        amount: budgetItemAmount,
        categoryId: categoryId
      };
      addBudgetItem(newBudgetItem);
    }
    handleCancelBudgetItem();
  };

  return (
    <Modal show={show}>
      <div className="modal-header">
        {!_.isEmpty(modals.budgetItemData)
          ? "Edit Budget Item"
          : "New Budget Item"}
      </div>
      <div>
        <div className="input-container">
          <label htmlFor="budgetItemName">Budget Item Name</label>
          <input
            className="input"
            type="text"
            name="budgetItemName"
            value={budgetItemName}
            onChange={handleBudgetItemNameChange}
          />
        </div>
        <div className="input-container">
          <label htmlFor="budgetItemAmount">Budget Item Amount</label>
          <input
            className="input"
            type="number"
            name="budgetItemAmount"
            value={budgetItemAmount}
            onChange={handleBudgetItemAmountChange}
          />
        </div>
      </div>
      <div className="button-margin">
        <Button
          buttonClicked={handleCancelBudgetItem}
          borderColor="#FC384C"
          color="#FC384C"
        >
          Cancel
        </Button>
        <Button buttonClicked={handleAddBudgetItem}>Save</Button>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return { categoryId: state.modals.categoryId, modals: state.modals };
};

const mapDispatchToProps = dispatch => {
  return {
    hideBudgetItemModal: () => dispatch(actions.hideBudgetItemModal()),
    editBudgetItemData: () => dispatch(actions.editBudgetItemData()),
    addBudgetItem: newBudgetItem =>
      dispatch(actions.addBudgetItem(newBudgetItem)),
    updateBudgetItem: newBudgetItem =>
      dispatch(actions.updateBudgetItem(newBudgetItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetItemModal);
