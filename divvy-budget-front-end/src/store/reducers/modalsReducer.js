import {
  EDIT_BUDGET_ITEM,
  EDIT_BUDGET_ITEM_DATA,
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
  categoryId: {},
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
        showBudgetItemModal: true,
        categoryId: action.payload
      };
    case HIDE_BUDGET_ITEM_MODAL:
      return {
        ...state,
        showBudgetItemModal: false,
        categoryId: null
      };
    case EDIT_CATEGORY_DATA:
      return {
        ...state,
        categoryData:
          action.payload && action.payload.category
            ? action.payload.category
            : {}
      };
    case EDIT_BUDGET_ITEM_DATA:
      return {
        ...state,
        budgetItemData: action.payload ? action.payload : {}
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
