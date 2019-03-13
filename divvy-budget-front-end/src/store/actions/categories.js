import http from "../../http";
import * as actionTypes from "../actions/types";

export const fetchCategories = () => {
  return dispatch => {
    http.get("/categories").then(response => {
      dispatch(setCategories(response.data));
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
  console.log(budgetItems);
  return dispatch => {
    http.delete(`/categories/${categoryId}`).then(() => {
      budgetItems.forEach(item => {
        http
          .delete(`/budget_items/${item.id}`)
          .then(response => console.log(response));
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
