import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import "./styles/import.scss";
const Modal = React.lazy(() => import("./components/Modal/modal"));
const Help = React.lazy(() => import("./pages/Help"));
const About = React.lazy(() => import("./pages/About"));
const CreateGroup = React.lazy(() => import("./pages/CreateGroup"));

const App = (props) => {
  const [showElement, setShowElement] = useState(false);

  const { handleInfo } = props;
  return (
    <div className="App">
      <Router>
        {showElement ? (
          <Suspense fallback={<h1 className="loading">....Loading</h1>}>
            <Modal close={() => setShowElement(false)} info={handleInfo} />
          </Suspense>
        ) : null}
        <Navbar showElement={() => setShowElement(true)} />

        <Suspense fallback={<h1 className="loading">....Loading</h1>}>
          <Route path="/creategroup" render={() => <CreateGroup />} />
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
        </Suspense>
        <Route exact path="/" component={Homepage} />
      </Router>
    </div>
  );
};

export default App;
