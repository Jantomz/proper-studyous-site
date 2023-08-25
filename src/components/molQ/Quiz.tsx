import React, { useState } from "react";

export default function Quiz() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  let questions = [""];
  let answers = [""];

  const handleQ = (event: any) => {
    setQuestion(event.target.value);
  };

  const handleA = (event: any) => {
    setAnswer(event.target.value);
  };

  function handleSubmit() {
    console.log(question);
    console.log(answer);
    answers.push(answer);
    questions.push(question);
    console.log(questions);
    console.log(answers);
  }

  function handleReview() {
    console.log(questions);
    console.log(answers);
  }

  return (
    <div className="h-screen w-full bg-mintWhite pt-3">
      <div className="mx-auto mt-32 flex h-2/3 w-11/12 rounded-2xl bg-darkGreen pb-20 pt-20">
        <div className="mx-auto h-full w-1/3 rounded-xl bg-minty p-10">
          <label htmlFor="question" className="text-4xl lg:text-5xl">
            Question:
          </label>
          <br></br>
          <br></br>
          <input
            type="text"
            id="question"
            name="question"
            value={question}
            onChange={handleQ}
            className="mt-3 h-10 w-5/6 bg-basWhite"
          ></input>
        </div>

        <div className="mx-auto h-full py-48 align-middle">
          <button
            className="mb-10 bg-veryLight px-5 py-2"
            onClick={handleSubmit}
            id="submitButton"
          >
            Submit
          </button>
          <br></br>
          <br></br>
          <button
            className="bg-veryLight px-5 py-2"
            onClick={handleReview}
            id="reviewButton"
          >
            Review
          </button>
        </div>

        <div className="mx-auto h-full w-1/3 rounded-xl bg-minty p-10">
          <label htmlFor="question" className="text-4xl lg:text-5xl">
            Answer:
          </label>
          <br></br>
          <br></br>
          <textarea
            id="notes"
            name="notes"
            value={answer}
            onChange={handleA}
            className="mt-3 h-32 w-5/6 bg-basWhite"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
