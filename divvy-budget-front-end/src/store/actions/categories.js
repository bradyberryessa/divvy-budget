import http from "../../http";
import * as actionTypes from "../actions/types";

export const fetchCategories = () => {
  return dispatch => {
    http.get("/categories").then(response => {
      console.log(response);
      dispatch(setCategories(response.data.data));
    });
  };
};

export const setCategories = categories => {
  return {
    type: actionTypes.SET_CATEGORIES,
    payload: categories
  };
};

export const deleteCategory = (categoryId, budgetItems) => {
  return dispatch => {
    http.delete(`/categories/${categoryId}`).then(() => {
      budgetItems.forEach(item => {
        http.delete(`/budget_items/${item.id}`);
      });
      dispatch(budgetItemDeleted(categoryId));
    });
  };
};

export const budgetItemDeleted = budgetItemId => {
  return {
    type: actionTypes.DELETE_CATEGORY,
    payload: budgetItemId
  };
};
