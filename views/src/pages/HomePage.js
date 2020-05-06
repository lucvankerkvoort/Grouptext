import React from "react";
import Jumbotron from "../components/jumbotron";
class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        {Jumbotron("Ask a Question to a Group of Friends")}
      </div>
    );
  }
}

export default Homepage;
