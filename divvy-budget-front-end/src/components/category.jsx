import "./category.css";

import React, { useState } from "react";

import Button from "../components/shared/button";
import BudgetItem from "./budgetItem";
import BudgetItemModal from "./modals/budgetItemModal";

const Category = ({ category, budgetItems }) => {
  //   const [budgetItems, setBudgetItems] = useState();
  const [showBudgetItemModal, setShowBudgetItemModal] = useState(false);

  const newBudgetItem = () => {
    console.log("newBudgetItem", showBudgetItemModal);
    setShowBudgetItemModal(true);
  };

  const handleAddNewBudgetItem = budgetItemName => {
    console.log(budgetItemName);
    setShowBudgetItemModal(false);
  };

  const handleCancelModal = () => {
    setShowBudgetItemModal(false);
  };

  return (
    <>
      <BudgetItemModal
        show={showBudgetItemModal}
        newBudgetItem={handleAddNewBudgetItem}
        cancelBudgetItem={handleCancelModal}
      />
      <div style={{ width: "200px" }}>
        <div className="category-header">
          <div>{category}</div>
          <Button buttonClicked={newBudgetItem}>+</Button>
        </div>
        {budgetItems.map(({ id, name, amount }) => (
          <BudgetItem key={id} name={name} amount={amount} />
        ))}
      </div>
    </>
  );
};

export default Category;
