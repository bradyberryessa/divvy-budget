import {
  EDIT_BUDGET_ITEM,
  EDIT_CATEGORY_DATA,
  HIDE_BUDGET_ITEM_MODAL,
  HIDE_CATEGORY_MODAL,
  SHOW_BUDGET_ITEM_MODAL,
  SHOW_CATEGORY_MODAL
} from "../actions/types";

const initalState = {
  showCategoryModal: false,
  showBudgetItemModal: false,
  categoryData: {},
  budgetItemData: {}
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SHOW_CATEGORY_MODAL:
      return {
        ...state,
        showCategoryModal: true
      };
    case HIDE_CATEGORY_MODAL:
      return {
        ...state,
        showCategoryModal: false
      };
    case SHOW_BUDGET_ITEM_MODAL:
      return {
        ...state,
        showBudgetItemModal: true
      };
    case HIDE_BUDGET_ITEM_MODAL:
      return {
        ...state,
        showBudgetItemModal: false
      };
    case EDIT_CATEGORY_DATA:
      return {
        ...state,
        categoryData:
          action.payload && action.payload.category
            ? action.payload.category
            : {}
      };
    case EDIT_BUDGET_ITEM:
      return {
        ...state,
        budgetItemData:
          action.payload && action.payload.budgetItem
            ? action.payload.budgetItem
            : {}
      };
    default:
      return state;
  }
};
