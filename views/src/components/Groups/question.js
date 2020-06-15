import React from "react";

const Questions = ({ question }) => {
  return (
    <>
      {(question || []).length < 1 ? null : (
        <div className="question">
          <h2>Question</h2>
          <p>{question || "First initial Question"}</p>
        </div>
      )}
    </>
  );
};

export default Questions;
