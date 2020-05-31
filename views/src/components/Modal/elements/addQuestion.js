import React, { useState } from "react";
import { useContext } from "react";
import { store } from "../../../services/Store";

export const AddQuestion = ({ close }) => {
  const userData = useContext(store);
  const { dispatch } = userData;

  const [question, setQuestion] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const info = {
      ...question,
    };
    dispatch({ type: "question", payload: info });
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
