import React from "react";
import API from "../services/controller";
import Modal from "../components/modal";
import Group from "../components/group";

class CreateGroup extends React.Component {
  state = {
    groups: [],
    value: "",
    showElement: false,
  };

  componentDidMount() {
    API.getUsers().then((res) => this.setState({ groups: res }));
  }
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
          <Modal close={() => this.Showelement(false)} info={this.handleInfo} />
        ) : null}
        <div
          className="addGroup"
          onClick={() => {
            this.Showelement(true);
            localStorage.setItem("element", "Group");
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
