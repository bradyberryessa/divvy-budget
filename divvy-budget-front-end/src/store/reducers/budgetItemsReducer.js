import {
  SET_BUDGET_ITEMS,
  DELETE_BUDGET_ITEM,
  ADD_BUDGET_ITEM
} from "../actions/types";

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
    case ADD_BUDGET_ITEM:
      return {
        ...state,
        budgetItems: [...state.budgetItems, action.payload]
      };
    case DELETE_BUDGET_ITEM:
      const filteredBudgetItems = state.budgetItems.filter(
        item => item.id !== action.payload
      );
      return {
        ...state,
        budgetItems: filteredBudgetItems
      };
    default:
      return state;
  }
};
