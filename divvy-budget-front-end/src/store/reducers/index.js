import {
  SHOW_CATEGORY_MODAL,
  HIDE_CATEGORY_MODAL,
  SHOW_BUDGET_ITEM_MODAL,
  HIDE_BUDGET_ITEM_MODAL
} from "../actions/types";

const initalState = {
  showCategoryModal: false,
  showBudgetItemModal: false
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SHOW_CATEGORY_MODAL:
      console.log("SHOWING CATEGORY MODAL");
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
    default:
      return state;
  }
};
