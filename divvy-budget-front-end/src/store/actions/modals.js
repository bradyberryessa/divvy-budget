import http from "../../http";
import * as actionTypes from "./types";

export const showCategoryModal = () => {
  return { type: actionTypes.SHOW_CATEGORY_MODAL };
};

export const hideCategoryModal = () => {
  return { type: actionTypes.HIDE_CATEGORY_MODAL };
};

export const showBudgetItemModal = categoryId => {
  return { type: actionTypes.SHOW_BUDGET_ITEM_MODAL, payload: categoryId };
};

export const hideBudgetItemModal = () => {
  return { type: actionTypes.HIDE_BUDGET_ITEM_MODAL };
};

export const editCategoryData = categoryData => {
  return { type: actionTypes.EDIT_CATEGORY_DATA, payload: categoryData };
};

export const editBudgetItemData = budgetItemData => {
  return { type: actionTypes.EDIT_BUDGET_ITEM_DATA, payload: budgetItemData };
};

export const editBudgetItem = budgetItem => {
  return { type: actionTypes.EDIT_BUDGET_ITEM, payload: budgetItem };
};

export const addCategory = categoryName => {
  const body = { category: categoryName };
  return dispatch => {
    http.post("/categories", body).then(response => {
      dispatch(addNewCategory(response.data.data));
    });
  };
};

export const updateCategory = category => {
  const body = { category: category };
  return dispatch => {
    http.put(`/categories/${category.id}`, body).then(response => {
      dispatch(updateCategories(response.data.data));
    });
  };
};

export const addNewCategory = newCategory => {
  return { type: actionTypes.ADD_NEW_CATEGORY, payload: newCategory };
};

export const updateCategories = updatedCategory => {
  return { type: actionTypes.UPDATE_CATEGORY, payload: updatedCategory };
};

export const addBudgetItem = newBudgetItem => {
  newBudgetItem.categoryId = newBudgetItem.categoryId.toString();
  newBudgetItem.amount = newBudgetItem.amount.toString();
  const body = { item: newBudgetItem };
  return dispatch => {
    http.post("/items", body).then(response => {
      dispatch(budgetItemAdded(response.data.data));
    });
  };
};

export const budgetItemAdded = newBudgetItem => {
  return { type: actionTypes.ADD_BUDGET_ITEM, payload: newBudgetItem };
};

export const updateBudgetItem = updatedBudgetItem => {
  updatedBudgetItem.categoryId = updatedBudgetItem.categoryId.toString();
  const body = { item: updatedBudgetItem };
  return dispatch => {
    http.put(`/items/${updatedBudgetItem.id}`, body).then(response => {
      dispatch(budgetItemUpdated(response.data.data));
    });
  };
};

export const budgetItemUpdated = updatedBudgetItem => {
  return { type: actionTypes.UPDATE_BUDGET_ITEM, payload: updatedBudgetItem };
};
