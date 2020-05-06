import React from "react";

function Jumbotron() {
  const { title } = this.props;
  return (
    <div className="jumbotron">
      <h2>{title}</h2>
    </div>
  );
}

export default Jumbotron;
