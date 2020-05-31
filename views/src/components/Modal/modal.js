import React, { useEffect, useContext } from "react";
import Questionaire from "./questionaire";
import { store } from "../../services/Store";

const Modal = ({ close }) => {
  const userData = useContext(store);
  const { dispatch } = userData;
  return (
    <div className="wrapper">
      <h2 className="close" onClick={() => close()}>
        X
      </h2>
      <div className="screen">
        <Questionaire
          close={() => close()}
          element={userData.state.element}
          info={(input) => {
            dispatch({ type: "setInfo", payload: input });
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
