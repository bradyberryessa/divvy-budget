import React, { useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Button from "../shared/button";
import Modal from "../shared/modal";

const BudgetItemModal = props => {
  const [budgetItemName, setBudgetItemName] = useState("");
  const [budgetItemAmount, setBudgetItemAmount] = useState(0);

  const { show, addBudgetItem, hideBudgetItemModal, categoryId } = props;

  const handleBudgetItemNameChange = event => {
    setBudgetItemName(event.target.value);
  };

  const handleBudgetItemAmountChange = event => {
    setBudgetItemAmount(event.target.value);
  };

  const handleCancelBudgetItem = () => {
    setBudgetItemName("");
    setBudgetItemAmount(0);
    hideBudgetItemModal();
  };

  const handleAddBudgetItem = () => {
    const newBudgetItem = {
      name: budgetItemName,
      amount: budgetItemAmount,
      categoryId: categoryId
    };
    addBudgetItem(newBudgetItem);
    handleCancelBudgetItem();
  };

  return (
    <Modal show={show}>
      <h2>New Budget Item</h2>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <label>
            Budget Item Name
            <input
              type="text"
              name="budgetItemName"
              value={budgetItemName}
              onChange={handleBudgetItemNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Budget Item Amount
            <input
              type="number"
              name="budgetItemAmount"
              value={budgetItemAmount}
              onChange={handleBudgetItemAmountChange}
            />
          </label>
        </div>
      </div>
      <div style={{ margin: "10px 0" }}>
        <Button
          buttonClicked={handleCancelBudgetItem}
          backgroundColor="white"
          color="black"
        >
          Cancel
        </Button>
        <Button buttonClicked={handleAddBudgetItem} backgroundColor="blue">
          Save
        </Button>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => {
  return { categoryId: state.modals.categoryId };
};

const mapDispatchToProps = dispatch => {
  return {
    hideBudgetItemModal: () => dispatch(actions.hideBudgetItemModal()),
    addBudgetItem: newBudgetItem =>
      dispatch(actions.addBudgetItem(newBudgetItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetItemModal);
