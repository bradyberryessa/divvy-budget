import React, { useState } from "react";

import Modal from "../shared/modal";
import Button from "../shared/button";

const BudgetItemModal = props => {
  const [budgetItemName, setBudgetItemName] = useState("");
  const [budgetItemAmount, setBudgetItemAmount] = useState(0);

  const { show, cancelBudgetItem } = props;

  const handleBudgetItemNameChange = event => {
    setBudgetItemName(event.target.value);
  };

  const handleBudgetItemAmountChange = event => {
    setBudgetItemAmount(event.target.value);
  };

  const handleCancelBudgetItem = () => {
    setBudgetItemName("");
    cancelBudgetItem();
  };

  // const handleSaveBudgetItem = () => {
  //   setBudgetItemName("");
  //   saveBudgetItem(editBudgetItemName ? editBudgetItemName : budgetItemName);
  // };

  return (
    <Modal show={show}>
      <h2>New Budget Item</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label>
          Budget Item Name
          <input
            type="text"
            name="budgetItemName"
            value={budgetItemName}
            onChange={handleBudgetItemNameChange}
          />
        </label>
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
      <Button buttonClicked={handleCancelBudgetItem}>Cancel</Button>
      <Button buttonClicked={console.log("")}>Save</Button>
    </Modal>
  );
};

export default BudgetItemModal;
