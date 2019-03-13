import {
  SHOW_CATEGORY_MODAL,
  HIDE_CATEGORY_MODAL,
  SHOW_BUDGET_ITEM_MODAL,
  HIDE_BUDGET_ITEM_MODAL,
  EDIT_CATEGORY_DATA
} from "./types";

export const showCategoryModal = () => {
  return { type: SHOW_CATEGORY_MODAL };
};

export const hideCategoryModal = () => {
  return { type: HIDE_CATEGORY_MODAL };
};

export const showBudgetItemModal = () => {
  return { type: SHOW_BUDGET_ITEM_MODAL };
};

export const hideBudgetItemModal = () => {
  return { type: HIDE_BUDGET_ITEM_MODAL };
};

export const editCategoryData = categoryData => {
  return { type: EDIT_CATEGORY_DATA, payload: categoryData };
};
