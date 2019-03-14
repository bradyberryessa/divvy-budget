import {
  ADD_BUDGET_ITEM,
  DELETE_BUDGET_ITEM,
  SET_BUDGET_ITEMS,
  UPDATE_BUDGET_ITEM
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
    case UPDATE_BUDGET_ITEM:
      const updatedBudgetItems = state.budgetItems.map(item => {
        return item.id === action.payload.id ? action.payload : item;
      });
      return {
        ...state,
        budgetItems: updatedBudgetItems
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
