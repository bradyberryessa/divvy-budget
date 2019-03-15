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
      <div className="modal-header">
        {!_.isEmpty(modals.categoryData) ? "Edit Category" : "New Category"}
      </div>
      <div className="input-container">
        <label htmlFor="categoryName">Category Name</label>
        <input
          className="input"
          type="text"
          name="categoryName"
          value={categoryName}
          onChange={handleChange}
        />
      </div>
      <div className="button-margin">
        <Button
          buttonClicked={handleCancelCategory}
          borderColor="#FC384C"
          color="#FC384C"
        >
          Cancel
        </Button>
        <Button buttonClicked={handleSaveCategory} backgroundColor="">
          Save
        </Button>
      </div>
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
