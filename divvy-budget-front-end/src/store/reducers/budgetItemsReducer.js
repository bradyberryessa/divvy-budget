import { SET_BUDGET_ITEMS } from "../actions/types";

const initalState = {
  budgetItems: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_BUDGET_ITEMS:
      console.log("IN HEREERE");
      return {
        ...state,
        budgetItems: action.payload
      };
    default:
      return state;
  }
};
