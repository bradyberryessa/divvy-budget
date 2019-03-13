import { SET_BUDGET_ITEMS } from "../actions/types";

const initalState = {
  budgetItems: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_BUDGET_ITEMS:
      return {
        ...state,
        budgetItems: action.payload
      };
    default:
      return state;
  }
};
