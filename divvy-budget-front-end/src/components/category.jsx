import React, { useState } from "react";

import http from "../http";
import BudgetItem from "./budgetItem";
import CategoryModal from "./modals/categoryModal";

const Category = ({ id, name, updateCategories, budgetItems }) => {
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleCategoryClicked = () => {
    setShowCategoryModal(true);
  };

  const cancelCategory = () => {
    setShowCategoryModal(false);
  };

  const saveEditedCategory = async updatedName => {
    console.log(updatedName);
    const { data: updatedCategory } = await http.put(`/categories/${id}`, {
      name: updatedName
    });
    updateCategories(updatedCategory);
    setShowCategoryModal(false);
  };

  const categoryBudgetItems = budgetItems.filter(item => item.id === id);
  return (
    <>
      <CategoryModal
        show={showCategoryModal}
        cancelCategory={cancelCategory}
        saveNewCategory={saveEditedCategory}
        editCategoryName={name}
      />
      <div>
        <div onClick={handleCategoryClicked}>{name}</div>
        {budgetItems.map(({ id, name, amount }) => (
          <BudgetItem key={id} name={name} amount={amount} />
        ))}
      </div>
    </>
  );
};

export default Category;
