import "./App.css";

import React, { useState } from "react";

import Button from "./components/button";
import Modal from "./components/modal";

const App = () => {
  const [showNewCategoryModal, setNewCategoryModal] = useState(true);

  const createNewCategory = () => {
    setNewCategoryModal(true);
    console.log(showNewCategoryModal);
  };

  const cancelCategory = () => {
    console.log("cancelCategory");
  };

  const saveNewCategory = () => {
    console.log("saveNewCategory");
  };

  return (
    <div className="App">
      <div>Testing this out;</div>
      <Button buttonClicked={createNewCategory}>+ Create new category</Button>
      <Modal show={showNewCategoryModal}>
        <h2>New Category</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input />
          <input />
        </div>
        <Button buttonClicked={cancelCategory}>Cancel</Button>
        <Button buttonClicked={saveNewCategory}>Save</Button>
      </Modal>
    </div>
  );
};

export default App;
