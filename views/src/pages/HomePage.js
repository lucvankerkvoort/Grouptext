import React from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Jumbotron text="Ask a Question to a Group of Friends" />
      </div>
    );
  }
}

export default Homepage;
