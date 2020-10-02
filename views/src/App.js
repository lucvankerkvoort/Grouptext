import React, { useState, Suspense } from "react";
import Navbar from "./components/Navbar/navbar";
import { HashRouter, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import "./styles/import.scss";
const Modal = React.lazy(() => import("./components/Modal/modal"));
const Help = React.lazy(() => import("./pages/Help"));
const About = React.lazy(() => import("./pages/About"));
const Chat = React.lazy(() => import("./pages/Chat"));

const App = (props) => {
  const [showElement, setShowElement] = useState(false);

  const { handleInfo } = props;
  return (
    <div className="App">
      <HashRouter basename="/">
        {showElement ? (
          <Suspense fallback={<h1 className="loading">....Loading</h1>}>
            <Modal close={() => setShowElement(false)} info={handleInfo} />
          </Suspense>
        ) : null}
        <Navbar showElement={() => setShowElement(true)} />

        <Suspense fallback={<h1 className="loading">....Loading</h1>}>
          <Route path="/chat" render={(props) => <Chat {...props} />} />
          <Route path="/help" component={Help} />
          <Route path="/about" component={About} />
        </Suspense>
        <Route exact path="/" component={Homepage} />
      </HashRouter>
    </div>
  );
};

export default App;
