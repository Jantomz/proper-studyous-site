import { qArray, aArray } from "./Quiz";

export default function BeQuizzed() {
  let questions = qArray;
  let answers = aArray;
  console.log(questions);
  console.log(answers);

  let value = Math.floor(Math.random() * questions.length);
  let toAsk = questions[value];

  return (
    <div className="h-screen w-full bg-mintWhite pt-3">
      <div className="mx-auto mt-32 flex h-2/3 w-11/12 rounded-2xl bg-darkGreen pb-20 pt-20">
        <div className="mx-auto h-full w-2/3 rounded-xl bg-minty p-10"></div>
        <h1>{toAsk}</h1>
      </div>
    </div>
  );
}
