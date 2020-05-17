import React from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/HomePage";
import Modal from "./components/modal";
import Help from "./pages/Help";
import About from "./pages/About";
import CreateGroup from "./pages/CreateGroup";
import "./App.css";

import { setGroups } from "./actions";

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInfo: (input) => dispatch(setGroups(input)),
  };
};

class App extends React.Component {
  state = {
    showElement: false,
  };

  toggleElement = (boolean) => {
    this.setState({ showElement: boolean });
  };

  render() {
    const { handleInfo } = this.props;
    const { showElement } = this.state;
    return (
      <div className="App">
        <Router>
          {showElement ? (
            <Modal close={this.toggleElement} info={handleInfo} />
          ) : null}
          <Navbar showElement={this.toggleElement} />
          <Route path="/creategroup" render={() => <CreateGroup />} />
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Homepage} />
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
