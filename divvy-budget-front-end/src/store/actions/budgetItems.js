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
