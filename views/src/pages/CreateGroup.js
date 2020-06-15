import React, { useContext, useEffect, useState } from "react";
import API from "../services/controller";
import { store } from "../services/Store";
import Modal from "../components/Modal/modal";
import Group from "../components/Groups/group";

const CreateGroup = () => {
  const [showElement, setShowElement] = useState(false);

  const userData = useContext(store);
  const { dispatch } = userData;

  useEffect(
    function () {
      API.getGroups().then((data) =>
        dispatch({ type: "setGroups", payload: data })
      );
    },
    [userData.state.check]
  );
  console.log(userData.state);
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
