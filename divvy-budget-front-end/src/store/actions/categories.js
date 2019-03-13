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
