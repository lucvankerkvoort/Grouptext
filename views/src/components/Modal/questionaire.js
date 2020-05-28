import React, { useContext } from "react";
import { store } from "../../services/Store";
import { login, register, group, member, question } from "./questions";

class Questionaire extends React.Component {
  state = {};

  handleClick = (e) => {
    const { close, info } = this.props;
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
      info(this.state);
      close();
    }
  };
  questions = () => {
    const { element } = this.props;
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
        return;
    }
  };
  render() {
    const { element } = this.props;
    return (
      <div className="Questionaire">
        <form>
          <h2>{element}</h2>
          {this.questions().map((element, i) => {
            return (
              <input
                key={i}
                name={element.name}
                type={element.type}
                placeholder={element.placeholder}
                onChange={(e) => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
              />
            );
          })}
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Questionaire;
