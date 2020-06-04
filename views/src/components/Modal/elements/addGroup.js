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

    let updatedGroups = [...userData.state.groups];
    updatedGroups.push(info);

    API.setGroups(info).then((res) => {
      dispatch({ type: "check", payload: !userData.state.check });
      console.log(res);
    });
    // dispatch({ type: "setGroups", payload: updatedGroups });
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
