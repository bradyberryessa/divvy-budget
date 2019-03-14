import "./categoryModal.css";

import * as _ from "lodash";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Button from "../shared/button";
import Modal from "../shared/modal";

const CategoryModal = props => {
  const [categoryName, setCategoryName] = useState("");

  const {
    show,
    modals,
    hideCategoryModal,
    editCategoryData,
    updateCategory,
    addCategory
  } = props;

  useEffect(() => {
    if (!_.isEmpty(modals.categoryData)) {
      setCategoryName(modals.categoryData.name);
    }
  }, []);

  const handleChange = event => {
    setCategoryName(event.target.value);
  };

  const handleCancelCategory = () => {
    setCategoryName("");
    hideCategoryModal();
    editCategoryData({});
  };

  const handleSaveCategory = () => {
    !_.isEmpty(modals.categoryData)
      ? updateCategory({ ...modals.categoryData, name: categoryName })
      : addCategory({ name: categoryName });
    handleCancelCategory();
  };

  return (
    <Modal show={show}>
      <h2>
        {!_.isEmpty(modals.categoryData) ? "Edit Category" : "New Category"}
      </h2>
      <div className="category-input">
        <label>
          Category Name
          <input
            type="text"
            name="categoryName"
            value={categoryName}
            onChange={handleChange}
          />
        </label>
      </div>
      <Button buttonClicked={handleCancelCategory}>Cancel</Button>
      <Button buttonClicked={handleSaveCategory}>Save</Button>
    </Modal>
  );
};

const mapStateToProps = state => {
  return { modals: state.modals };
};

const mapDispatchToProps = dispatch => {
  return {
    editCategoryData: () => dispatch(actions.editCategoryData()),
    hideCategoryModal: () => dispatch(actions.hideCategoryModal()),
    addCategory: categoryName => dispatch(actions.addCategory(categoryName)),
    updateCategory: newCategoryData =>
      dispatch(actions.updateCategory(newCategoryData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryModal);
