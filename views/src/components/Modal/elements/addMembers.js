import React, { useState } from "react";
import { useContext } from "react";
import { store } from "../../../services/Store";
import API from "../../../services/controller";

export const AddMembers = ({ close }) => {
  const userData = useContext(store);
  const { dispatch } = userData;

  const [member_name, setName] = useState("");
  const [member_tel, setTel] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const info = {
      ...member_name,
      ...member_tel,
    };
    const currentGroup = userData.state.current;

    // API.addMemberToGroup([currentGroup, info]);

    dispatch({ type: "member", payload: info });
    close();
  };
  return (
    <>
      <input
        name="member_name"
        type="name"
        placeholder="Member name"
        onChange={(e) => setName({ [e.target.name]: e.target.value })}
      />
      <input
        name="member_tel"
        type="tel"
        placeholder="Phone number"
        onChange={(e) => setTel({ [e.target.name]: e.target.value })}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};
