import {
  SHOW_CATEGORY_MODAL,
  HIDE_CATEGORY_MODAL,
  SHOW_BUDGET_ITEM_MODAL,
  HIDE_BUDGET_ITEM_MODAL,
  EDIT_CATEGORY_DATA
} from "../actions/types";

const initalState = {
  showCategoryModal: false,
  showBudgetItemModal: false,
  categoryData: {}
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
        categoryData: action.payload
      };
    default:
      return state;
  }
};
