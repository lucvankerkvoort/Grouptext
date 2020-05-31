import React from "react";
import { AddGroup } from "./elements/addGroup";
import { AddMembers } from "./elements/addMembers";
import { AddQuestion } from "./elements/addQuestion";
import { Register } from "./elements/registration";
import { Login } from "./elements/login";

const Questionaire = ({ close, info, element }) => {
  const handleClick = (e) => {
    console.log(info);
    e.preventDefault();
    if (Object.keys(this.state).length === 0) {
      let form = document.getElementsByTagName("form");
      if (form[0].children.length <= 3) {
        let message = document.createElement("p");
        message.textContent = "Please provide a Group Name";
        form[0].append(message);
      }
    } else {
      info();
      close();
    }
  };
  const questions = () => {
    switch (element) {
      case "Login":
        return <Login close={close} />;
      case "Register":
        return <Register close={close} />;
      case "Groups":
        return <AddGroup close={close} />;
      case "Member":
        return <AddMembers close={close} />;
      case "Question":
        return <AddQuestion close={close} />;
      default:
        return;
    }
  };

  return (
    <div className="Questionaire">
      <h2>{element}</h2>
      <form>{questions()}</form>
    </div>
  );
};

export default Questionaire;
