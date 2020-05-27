import React, { useContext, useEffect, useState } from "react";
import API from "../services/controller";
import { store } from "../services/Store";
import Modal from "../components/Modal/modal";
import Group from "../components/Groups/group";

const CreateGroup = (props) => {
  const [showElement, setShowElement] = useState(false);

  const userData = useContext(store);
  const { dispatch } = userData;

  useEffect(function () {
    API.getGroups().then((res) =>
      dispatch({ type: "setGroups", payload: res })
    );
  }, []);

  const handleInfo = (input) => {
    console.log("Input", input);
  };
  const removeGroup = (input) => {
    console.log(input);
    const { groups } = this.state;
    let array = [...groups];
    array.splice(input, 1);
    this.setState({ groups: array });
  };
  return (
    <div className="CreateGroup">
      {showElement ? (
        <Modal close={() => setShowElement(false)} info={handleInfo} />
      ) : null}
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
        return (
          <Group key={i} id={i} element={element} removeGroup={removeGroup} />
        );
      })}
    </div>
  );
};
export default CreateGroup;
