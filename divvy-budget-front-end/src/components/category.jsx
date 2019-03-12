import React, { useState } from "react";
import BudgetItem from "./budgetItem";

const Category = ({ category }) => {
  const [budgetItems, setBudgetItems] = useState([
    { id: 1, name: "gas", amount: 50 },
    { id: 2, name: "mortgage", amount: 50 },
    { id: 3, name: "food", amount: 50 }
  ]);

  return (
    <div>
      <div>{category}</div>
      {budgetItems.map(({ id, name, amount }) => (
        <BudgetItem key={id} name={name} amount={amount} />
      ))}
    </div>
  );
};

export default Category;
