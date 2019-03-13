import * as actionTypes from "./types";
import http from "../../http";

export const showCategoryModal = () => {
  return { type: actionTypes.SHOW_CATEGORY_MODAL };
};

export const hideCategoryModal = () => {
  return { type: actionTypes.HIDE_CATEGORY_MODAL };
};

export const showBudgetItemModal = () => {
  return { type: actionTypes.SHOW_BUDGET_ITEM_MODAL };
};

export const hideBudgetItemModal = () => {
  return { type: actionTypes.HIDE_BUDGET_ITEM_MODAL };
};

export const editCategoryData = categoryData => {
  return { type: actionTypes.EDIT_CATEGORY_DATA, payload: categoryData };
};

export const addCategory = categoryName => {
  return dispatch => {
    http.post("/categories", categoryName).then(response => {
      dispatch(addNewCategory(response.data));
    });
  };
};

export const updateCategory = category => {
  return dispatch => {
    http.put(`/categories/${category.id}`, category).then(response => {
      dispatch(updateCategories(response.data));
    });
  };
};

export const addNewCategory = newCategory => {
  console.log(newCategory);
  return { type: actionTypes.ADD_NEW_CATEGORY, payload: newCategory };
};

export const updateCategories = updatedCategory => {
  console.log(updatedCategory);
  return { type: actionTypes.UPDATE_CATEGORY, payload: updatedCategory };
};
