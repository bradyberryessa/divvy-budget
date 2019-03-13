import React, { useState } from "react";

import Modal from "../shared/modal";
import Button from "../shared/button";

const BudgetItemModal = props => {
  const [budgetItemName, setBudgetItemName] = useState("");
  const [editBudgetItemName, setEditBudgetItemName] = useState("");

  const { show, cancelBudgetItem, saveBudgetItem } = props;

  const handleChange = event => {
    editBudgetItemName
      ? setEditBudgetItemName(event.target.value)
      : setBudgetItemName(event.target.value);
  };

  const handleCancelBudgetItem = () => {
    setBudgetItemName("");
    cancelBudgetItem();
  };

  const handleSaveBudgetItem = () => {
    setBudgetItemName("");
    saveBudgetItem(editBudgetItemName ? editBudgetItemName : budgetItemName);
  };

  return (
    <Modal show={show}>
      <h2>New Category</h2>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <label>
          Category Name
          <input
            type="text"
            name="categoryName"
            value={editBudgetItemName ? editBudgetItemName : budgetItemName}
            onChange={handleChange}
          />
        </label>
      </div>
      <Button buttonClicked={handleCancelBudgetItem}>Cancel</Button>
      <Button buttonClicked={handleSaveBudgetItem}>Save</Button>
    </Modal>
  );
};

export default BudgetItemModal;
