import React from "react";
import CategoryModal from "./modals/categoryModal";

const BudgetItem = ({ name, amount }) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>{name}</div>
        <div>{amount}</div>
      </div>
      <CategoryModal />
    </>
  );
};

export default BudgetItem;
