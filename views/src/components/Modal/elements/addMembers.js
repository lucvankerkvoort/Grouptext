import React, { useState } from "react";
import { useContext } from "react";
import { store } from "../../../services/Store";
import API from "../../../services/controller";

export const AddMembers = ({ close }) => {
  const userData = useContext(store);
  const { dispatch } = userData;

  const [member_name, setName] = useState("");
  const [member_phone, setTel] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      ...member_name,
      ...member_phone,
    };
    const id = userData.state.cur_group_id;
    console.log(userData);

    API.addMemberToGroup(id, data).then((res) => {
      dispatch({ type: "check", payload: !userData.state.check });
      console.log(res);
    });

    // dispatch({ type: "member", payload: data });
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
        name="member_phone"
        type="tel"
        placeholder="Phone number"
        onChange={(e) => setTel({ [e.target.name]: e.target.value })}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};
