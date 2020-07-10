import React, { useContext, useEffect, useState } from "react";
import API from "../services/controller";
import { store } from "../services/Store";
import Modal from "../components/Modal/modal";
import Group from "../components/Groups/group";

const CreateGroup = () => {
  const [showElement, setShowElement] = useState(false);

  const userData = useContext(store);
  const { dispatch } = userData;

  // API.getQuestion()
  //   .then((res) => res.json)
  //   .then((data) => dispatch({ type: "setQuestions", payload: data }));

  useEffect(
    function () {
      API.getGroups()
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "setGroups", payload: data });
          console.log(data);
        });
    },
    [userData.state.check]
  );

  return (
    <div className="CreateGroup">
      {showElement ? <Modal close={() => setShowElement(false)} /> : null}
      <div
        className="addGroup"
        onClick={() => {
          setShowElement(true);
          dispatch({ type: "setElement", payload: "Groups" });
        }}
      >
        Add a Group +
      </div>
      {(userData.state.groups || []).map((element, i) => {
        return <Group key={i} element={element} />;
      })}
    </div>
  );
};
export default CreateGroup;
