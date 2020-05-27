import React from "react";

const Questions = (props) => {
  console.log(props);
  return (
    <>
      {props.questions.length < 1 ? null : (
        <div>
          <h2>Question</h2>
          <p>{props.questions}</p>
        </div>
      )}
    </>
  );
};

export default Questions;
