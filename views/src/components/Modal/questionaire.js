import React, { useEffect, useState, useContext } from "react";
import { store } from "../../services/Store";
import { login, register, group, member, question } from "./questions";

const Questionaire = ({ close }) => {
  const [info, setInfo] = useState();
  const userData = useContext(store);
  const { dispatch } = userData;

  const handleClick = (e) => {
    e.preventDefault();
    if (Object.keys(this.state).length === 0) {
      let form = document.getElementsByTagName("form");
      if (form[0].children.length <= 3) {
        let message = document.createElement("p");
        message.textContent = "Please provide a Group Name";
        form[0].append(message);
      }
    } else {
      close();
    }
  };
  const questions = () => {
    const element = userData.state.element;
    switch (element) {
      case "Login":
        return login;
      case "Register":
        return register;
      case "Group":
        return group;
      case "Member":
        return member;
      case "Question":
        return question;
      default:
        return dispatch({ type: "setElement", payload: "" });
    }
  };
  console.log(info);
  return (
    <div className="Questionaire">
      <form>
        <h2>{userData.state.element}</h2>
        {questions().map((element, i) => {
          return (
            <input
              key={i}
              name={element.name}
              type={element.type}
              placeholder={element.placeholder}
              onChange={(e) => {
                const info = e.target.name;
                info({ [e.target.name]: e.target.value });
              }}
            />
          );
        })}
        <button onClick={() => handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default Questionaire;
