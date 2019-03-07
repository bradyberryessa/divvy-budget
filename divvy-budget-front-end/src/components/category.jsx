import React, { useState } from "react";
import BudgetItem from "./budgetItem";

const Category = ({ category }) => {
  const [budgetItems, setBudgetItems] = useState([
    { name: "gas", amount: 50 },
    { name: "mortgage", amount: 50 },
    { name: "food", amount: 50 }
  ]);

  return (
    <div>
      <div>{category}</div>
      {budgetItems.map(({ name, amount }) => (
        <BudgetItem name={name} amount={amount} />
      ))}
    </div>
  );
};

export default Category;
