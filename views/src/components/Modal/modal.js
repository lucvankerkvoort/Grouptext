import React from "react";
import Questionaire from "./questionaire";

const Modal = ({ close }) => {
  return (
    <div className="wrapper">
      <h2 className="close" onClick={() => close()}>
        X
      </h2>
      <div className="screen">
        <Questionaire close={() => close()} />
      </div>
    </div>
  );
};

export default Modal;
