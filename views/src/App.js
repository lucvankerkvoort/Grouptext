import React, { useState } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./pages/HomePage";
import Modal from "./components/modal";
import Help from "./pages/Help";
import About from "./pages/About";
import CreateGroup from "./pages/CreateGroup";
import "./App.css";

import { setGroups } from "./services/actions";

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

const App = (props) => {
  const [showElement, setShowElement] = useState(false);

  const { handleInfo } = props;
  return (
    <div className="App">
      <Router>
        {showElement ? (
          <Modal close={() => setShowElement(false)} info={handleInfo} />
        ) : null}
        <Navbar showElement={() => setShowElement(true)} />
        <Route path="/creategroup" render={() => <CreateGroup />} />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Homepage} />
      </Router>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
