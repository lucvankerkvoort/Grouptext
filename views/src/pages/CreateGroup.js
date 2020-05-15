import React from "react";
import Modal from "../components/modal";
import Group from "../components/group";

class CreateGroup extends React.Component {
  state = {
    groups: [],
    value: "",
    showElement: false,
  };

  handleInfo = (input) => {
    console.log(input);
    this.setState((state) => {
      const groups = state.groups.concat(input);
      return {
        groups,
      };
    });
  };
  showElement = (input) => {
    this.setState({ showElement: input });
  };

  removeGroup = (input) => {
    console.log(input);
    const { groups } = this.state;
    let array = [...groups];
    array.splice(input, 1);
    this.setState({ groups: array });
  };

  render() {
    const { showElement, groups } = this.state;
    return (
      <div className="CreateGroup">
        {showElement ? (
          <Modal close={this.showElement} info={this.handleInfo} />
        ) : null}
        <div
          className="addGroup"
          onClick={() => {
            localStorage.setItem("element", "Group");
            this.showElement(true);
          }}
        >
          Add a Group +
        </div>
        {(groups || []).map((element, i) => {
          return (
            <Group
              key={i}
              id={i}
              element={element}
              removeGroup={this.removeGroup}
            />
          );
        })}
      </div>
    );
  }
}
export default CreateGroup;
