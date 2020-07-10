import React from "react";

const Questions = ({ questions }) => {
  console.log(questions);
  return (
    <>
      {(questions || []).length < 1 ? null : (
        <div className="question">
          <h2>Question</h2>
          <p>{questions[questions.length - 1].question}</p>
        </div>
      )}
    </>
  );
};

export default Questions;
