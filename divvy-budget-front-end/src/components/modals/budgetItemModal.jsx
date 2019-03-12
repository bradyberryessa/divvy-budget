import React, { useState } from "react";

import Modal from "../shared/modal";
import Button from "../shared/button";

const BudgetItemModal = ({ show, cancelBudgetItem, newBudgetItem }) => {
  const [budgetItemName, setBudgetItemName] = useState("");

  const handleChange = event => {
    setBudgetItemName(event.target.value);
  };

  const handleCancelBudgetItem = () => {
    console.log("cancel");
    setBudgetItemName("");
    cancelBudgetItem();
  };

  const handleSaveNewBudgetItem = () => {
    console.log("save");
    newBudgetItem(budgetItemName);
    setBudgetItemName("");
  };

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
            onChange={handleChange}
          />
        </label>
      </div>
      <Button buttonClicked={handleCancelBudgetItem}>Cancel</Button>
      <Button buttonClicked={handleSaveNewBudgetItem}>Save</Button>
    </Modal>
  );
};

export default BudgetItemModal;
