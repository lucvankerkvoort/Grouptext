import React, { useState } from "react";
import { useContext } from "react";
import { store } from "../../../services/Store";
import API from "../../../services/controller";

export const AddGroup = ({ close }) => {
  const userData = useContext(store);
  const { dispatch } = userData;

  const [group_name, setGroupName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const info = {
      ...group_name,
    };

    // API.setGroups(info).then((res) => console.log(res));
    dispatch({ type: "addGroup", payload: info });
    close();
  };
  return (
    <>
      <input
        name="group_name"
        type="name"
        placeholder="Group name"
        onChange={(e) => setGroupName({ [e.target.name]: e.target.value })}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};
