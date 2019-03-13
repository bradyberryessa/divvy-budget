import {
  ADD_NEW_CATEGORY,
  SET_CATEGORIES,
  UPDATE_CATEGORY,
  DELETE_CATEGORY
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
      const newCategories = [...state.categories, action.payload];
      return {
        ...state,
        categories: newCategories
      };
    case UPDATE_CATEGORY:
      const updatedCategories = state.categories.map(category => {
        return parseInt(action.payload.id) === category.id
          ? action.payload
          : category;
      });
      return {
        ...state,
        categories: updatedCategories
      };
    case DELETE_CATEGORY:
      console.log("action.payload", action.payload);
      const filteredCategories = state.categories.filter(
        category => category.id !== action.payload
      );
      console.log(filteredCategories);
      return {
        ...state,
        categories: filteredCategories
      };
    default:
      return state;
  }
};
