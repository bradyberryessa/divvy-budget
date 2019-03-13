import { SET_CATEGORIES } from "../actions/types";

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
    default:
      return state;
  }
};
