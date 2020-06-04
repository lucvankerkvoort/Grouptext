import React, { useState, useContext } from "react";
import Modal from "../Modal/modal";
import Members from "./members";
import Questions from "./question";
import { store } from "../../services/Store";

const Group = ({ element, removeGroup, id }) => {
  const [showElement, setShowElement] = useState(false);

  const userData = useContext(store);
  const { dispatch } = userData;

  const setElement = (input) => {
    setShowElement(true);
    dispatch({
      type: "setElement",
      payload: input,
    });
    dispatch({ type: "setCurrent", payload: element.group_name });
  };

  return (
    <div className="groupElement">
      {showElement ? <Modal close={() => setShowElement(false)} /> : null}
      <h1>{element.group_name}</h1>
      <Members members={element.members} />
      <Questions questions={element.question} />
      <div className="buttons-group">
        <button onClick={() => setElement("Member")}>Add a Member</button>
        <button onClick={() => setElement("Question")}>Add a Question</button>
        <button onClick={() => removeGroup(id)}>Remove Group</button>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Group;
