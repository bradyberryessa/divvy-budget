import {
  ADD_NEW_CATEGORY,
  SET_CATEGORIES,
  UPDATE_CATEGORY
} from "../actions/types";

const initalState = {
  categories: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case ADD_NEW_CATEGORY:
      console.log("ADD_NEW_CATEGORY");
      const newCategories = [...state.categories, action.payload];
      return {
        ...state,
        categories: newCategories
      };
    case UPDATE_CATEGORY:
      console.log("UPDATE_CATEGORY");
      const updatedCategories = state.categories.map(category => {
        return parseInt(action.payload.id) === category.id
          ? action.payload
          : category;
      });
      return {
        ...state,
        categories: updatedCategories
      };
    default:
      return state;
  }
};
