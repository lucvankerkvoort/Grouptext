import React from "react";

const Questions = ({ questions }) => {
  return (
    <>
      {(questions || []).length < 1 ? null : (
        <div>
          <h2>Question</h2>
          {(questions || []).map((question, i) => {
            return <p key={i}>{question}</p>;
          })}
        </div>
      )}
    </>
  );
};

export default Questions;
