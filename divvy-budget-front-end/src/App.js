import "./App.css";

import React from "react";

import Button from "./components/button";

const App = () => {
  const createNewCategory = () => {
    console.log("creating new category");
  };

  return (
    <div className="App">
      <div>Testing this out;</div>
      <Button buttonClicked={createNewCategory}>+ Create new category</Button>
    </div>
  );
};

export default App;
