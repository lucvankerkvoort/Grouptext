import React, { createContext, useReducer } from "react";
// voor nu even true!!
const initialState = { authed: true };
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "setGroups":
        return Object.assign({}, state, { groups: action.payload });
      case "setElement":
        return Object.assign({}, state, { element: action.payload });
      case "setInfo":
        return Object.assign({}, state, { data: action.payload });
      case "setCurrent":
        return Object.assign({}, state, { cur_group_id: action.payload });
      case "registration":
        return Object.assign({}, state, { registration: action.payload });
      case "login":
        return Object.assign({}, state, { login: action.payload });
      case "member":
        return Object.assign({}, state, { members: action.payload });
      case "question":
        return Object.assign({}, state, { question: action.payload });
      case "addGroup":
        return Object.assign({}, state, { addedGroup: action.payload });
      case "check":
        return Object.assign({}, state, { check: action.payload });
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
