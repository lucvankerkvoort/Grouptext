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
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
