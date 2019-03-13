import http from "../../http";
import * as actionTypes from "../actions/types";

export const fetchBudgetItems = () => {
  return dispatch => {
    http.get("/budget_items").then(response => {
      dispatch(setBudgetItems(response.data));
    });
  };
};

export const setBudgetItems = budgetItems => {
  return {
    type: actionTypes.SET_BUDGET_ITEMS,
    payload: budgetItems
  };
};

export const deleteBudgetItem = budgetItemId => {
  return dispatch => {
    http.delete(`/budget_items/${budgetItemId}`).then(response => {
      dispatch(budgetItemDeleted(budgetItemId));
    });
  };
};

export const budgetItemDeleted = budgetItemId => {
  return {
    type: actionTypes.DELETE_BUDGET_ITEM,
    payload: budgetItemId
  };
};
