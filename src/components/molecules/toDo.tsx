import { useState } from "react";

let toDos = [""];

export default function ToDo() {
  const [toDo, setToDo] = useState("");
  //   const [listProper, setListProper] = useState("");
  let list = "";

  function handleSubmit() {
    event?.preventDefault();
    toDos.push(toDo);
    if (toDos[0] === "") {
      toDos.shift();
    }
    setToDo("");
    formatList();
  }
  function formatList() {
    const oldList = document.getElementsByClassName("list");
    if (oldList.length > 0) {
      oldList[0]?.remove();
    }
    const ul = document.createElement("ul");
    ul.setAttribute("class", "list");
    console.log(oldList.length);
    console.log(oldList);
    toDos.forEach((elem) => {
      const tempLiElem = document.createElement("li");
      tempLiElem.textContent = elem;
      tempLiElem.setAttribute("className", "list-item");
      ul.appendChild(tempLiElem);
    });
    const title = document.getElementById("title");
    title?.appendChild(ul);
  }

  function clearNotepad() {
    const oldList = document.getElementsByClassName("list");
    oldList[0]?.remove();
    toDos = [""];
  }

  return (
    <div>
      <div id="title">Notepad:</div>
      <form className="flex justify-center">
        <input
          type="text"
          required
          value={toDo}
          onChange={(event) => setToDo(event.target.value)}
          className=" m-8 p-2"
        ></input>
        {toDo.length > 0 ? (
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        ) : (
          <button
            className="hover:text-darkGreen"
            type="submit"
            onClick={() => alert("No Thoughts Written")}
          >
            Add
          </button>
        )}
      </form>
      <div className="flex justify-center">
        <button
          className=" bg-greenish p-2 hover:bg-darkGreen"
          onClick={clearNotepad}
        >
          Clear Notepad
        </button>
      </div>
    </div>
  );
}
