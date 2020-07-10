import React, { useState } from "react";
import { useContext } from "react";
import { store } from "../../../services/Store";
import API from "../../../services/controller";

export const AddQuestion = ({ close }) => {
  const userData = useContext(store);
  const { dispatch } = userData;

  const [question, setQuestion] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const data = {
      ...question,
    };
    const id = userData.state.cur_group_id;
    API.updateQuestion(id, data).then((res) => {
      dispatch({ type: "check", payload: !userData.state.check });
      console.log(res);
    });
    close();
  };
  return (
    <>
      <input
        name="question"
        type="text"
        placeholder="Yes or no question"
        onChange={(e) => setQuestion({ [e.target.name]: e.target.value })}
      />
      <button onClick={handleClick}>Submit</button>
    </>
  );
};
