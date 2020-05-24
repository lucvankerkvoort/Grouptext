import { UPDATE_GROUPS } from "./constants";

const initialState = {
  groups: [],
};

export const groupManagement = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_GROUPS:
      return Object.assign({}, state, { groups: action.payload });
    default:
      return state;
  }
};
