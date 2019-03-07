import React from "react";

const BudgetItem = ({ name, amount }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>{name}</div>
      <div>{amount}</div>
    </div>
  );
};

export default BudgetItem;
