import React, { useContext } from "react";
import Questionaire from "./questionaire";
import { store } from "../../services/Store";

const Modal = ({ close, data }) => {
  const userData = useContext(store);
  const { dispatch } = userData;
  const { element } = userData.state;
  return (
    <div className="wrapper">
      <h2 className="close" onClick={() => close()}>
        X
      </h2>
      <div className="screen">
        <Questionaire
          close={() => close()}
          element={element}
          data={data}
          info={(input) => {
            dispatch({ type: "setInfo", payload: input });
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
