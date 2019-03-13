import React, { useState } from "react";

import http from "../http";
import BudgetItem from "./budgetItem";
import BudgetItemModal from "./modals/budgetItemModal";
import CategoryModal from "./modals/categoryModal";
import Button from "./shared/button";

const Category = ({ id, name, updateCategories, budgetItems }) => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showAddBudgetItemModal, setShowAddBudgetItemModal] = useState(false);

  const handleCategoryClicked = () => {
    setShowCategoryModal(true);
  };

  const cancelCategory = () => {
    setShowCategoryModal(false);
  };

  const saveCategory = async updatedName => {
    console.log(updatedName);
    const { data: updatedCategory } = await http.put(`/categories/${id}`, {
      name: updatedName
    });
    updateCategories(updatedCategory);
    setShowCategoryModal(false);
  };

  const handleAddBudgetItem = () => {
    setShowAddBudgetItemModal(showAddBudgetItemModal);
  };

  return (
    <>
      <CategoryModal
        show={showCategoryModal}
        cancelCategory={cancelCategory}
        saveCategory={saveCategory}
        editCategoryName={name}
      />
      <BudgetItemModal show={showAddBudgetItemModal} />
      <div>
        <div onClick={handleCategoryClicked}>{name}</div>
        {budgetItems.map(({ id, name, amount }) => (
          <BudgetItem key={id} name={name} amount={amount} />
        ))}
        <Button buttonClicked={handleAddBudgetItem}>Add Budget Item</Button>
      </div>
    </>
  );
};

export default Category;
