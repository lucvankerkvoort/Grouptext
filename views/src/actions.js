import { UPDATE_GROUPS } from "./constants";

export const setGroups = (array) => {
  console.log(array);
  return {
    type: UPDATE_GROUPS,
    payload: array,
  };
};

// export const setMembers = (array) =>({
//   type:
// })
