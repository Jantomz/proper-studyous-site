import React, { useState } from "react";

let questions = [""];
let answers = [""];
let index = 0;

export default function Quiz() {
  // REACT WILL IMPORT THE THINGS OUTSIDE OF THE FUNCTION
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [review, setReview] = useState(false);
  const [qMode, setQMode] = useState(true);

  const handleQ = (event: any) => {
    setQuestion(event.target.value);
  };

  const handleA = (event: any) => {
    setAnswer(event.target.value);
  };

  function handleSubmit() {
    answers.push(answer);
    questions.push(question);
    console.log(questions);
    console.log(answers);
    setAnswer("");
    setQuestion("");
  }

  function handleClear() {
    location.reload();
  }

  function handleReview() {
    setReview(!review);
    questions.shift();
    answers.shift();
    shuffle(answers, questions);
    console.log(questions);
    console.log(answers);
  }

  function handleTurn() {
    setQMode(false);
  }

  function handleNext() {
    if (index < answers.length - 1) {
      index++;
      setQMode(true);
    } else {
      alert("There are no more questions.");
      location.reload();
    }
  }

  function shuffle(obj1: any, obj2: any) {
    let index = obj1.length;
    let rnd, tmp1, tmp2;

    while (index) {
      rnd = Math.floor(Math.random() * index);
      index -= 1;
      tmp1 = obj1[index];
      tmp2 = obj2[index];
      obj1[index] = obj1[rnd];
      obj2[index] = obj2[rnd];
      obj1[rnd] = tmp1;
      obj2[rnd] = tmp2;
    }
  }

  return (
    <div className="pt-16">
      {!review ? (
        <div className="w-full bg-mintWhite pt-3">
          <div className="m-12 mt-32 flex rounded-2xl bg-darkGreen pb-20 pt-20 max-lg:flex-col">
            <div className="mx-auto flex w-1/3 flex-col items-center justify-center rounded-xl bg-minty p-10 max-xl:w-4/5 max-md:p-4">
              <label
                htmlFor="question"
                className="text-4xl max-sm:text-xl lg:text-5xl"
              >
                Question:
              </label>
              <textarea
                id="question"
                name="question"
                value={question}
                onChange={handleQ}
                className="mt-8 h-32 w-5/6 rounded-md bg-basWhite p-2"
              ></textarea>
            </div>
            <div className="mx-auto flex h-full flex-col items-center justify-center py-48 text-center max-lg:py-8">
              <div>You have {answers.length - 1} questions in your deck</div>

              {question.length > 0 && answer.length > 0 ? (
                <div>
                  <button
                    className="m-10 rounded-md bg-veryLight p-4 hover:bg-greenish"
                    onClick={handleSubmit}
                    id="submitButton"
                  >
                    Submit Card
                  </button>
                </div>
              ) : null}
              {answers.length > 1 ? (
                <div>
                  <button
                    onClick={handleReview}
                    className="m-10 rounded-md bg-veryLight p-4 hover:bg-greenish"
                  >
                    Review
                  </button>
                  <button
                    onClick={handleClear}
                    className="m-10 rounded-md bg-veryLight p-4 hover:bg-greenish"
                  >
                    Clear Questions and Answers
                  </button>
                </div>
              ) : null}
            </div>

            <div className="mx-auto flex w-1/3 flex-col items-center justify-center rounded-xl bg-minty p-10 max-xl:w-4/5 max-md:p-4">
              <label
                htmlFor="answer"
                className="pb-3 text-4xl max-sm:text-xl lg:text-5xl"
              >
                Answer:
              </label>
              <textarea
                id="answer"
                name="answer"
                value={answer}
                onChange={handleA}
                className="mt-8 h-32 w-5/6 rounded-md bg-basWhite p-2"
              ></textarea>
            </div>
          </div>
          <p id="questionUpload"></p>
          <p id="answerUpload"></p>
        </div>
      ) : (
        <div className="m-auto mt-32 w-3/4 bg-greenish">
          {qMode ? (
            <div>
              <div className="p-8 text-center text-5xl">Question</div>
              <div className="rounded-md bg-midDarkGreen p-8 text-center text-4xl text-veryLight max-md:text-base">
                {questions[index]?.endsWith("?")
                  ? questions[index]
                  : `${questions[index]}?`}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleTurn}
                  className=" m-8 bg-darkGreen p-8 text-veryLight hover:bg-darkGreenTrans"
                >
                  Reveal Answer
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="p-8 text-center text-5xl ">Answer</div>
              <div className="rounded-md bg-midDarkGreen p-8 text-center text-4xl text-veryLight max-md:text-base">
                {answers[index]}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleNext}
                  className=" m-8 bg-darkGreen p-8 text-veryLight hover:bg-darkGreenTrans"
                >
                  Next Question
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
