export default function MolNotes() {
  return (
    <div className="h-screen w-full bg-basWhite pt-28">
      <div className="w-fill mx-36 mt-16 flex h-5/6 rounded-xl bg-mintWhite pt-10">
        <div className="h-fill mx-10 w-3/5 overflow-scroll pt-1">
          <form>
            <label htmlFor="title" className="text-4xl lg:text-5xl">
              Title:
            </label>
            <br></br>
            <input
              type="text"
              id="title"
              className="mt-3 h-10 w-5/6 bg-basWhite"
            ></input>

            <br></br>
            <br></br>

            <label htmlFor="title" className="text-4xl lg:text-5xl">
              Name:
            </label>
            <br></br>
            <input
              type="text"
              id="name"
              className="mt-3 h-10 w-5/6 bg-basWhite"
            ></input>

            <br></br>
            <br></br>

            <label htmlFor="title" className="text-4xl lg:text-5xl">
              Class:
            </label>
            <br></br>
            <input
              type="text"
              id="class"
              className="mt-3 h-10 w-5/6 bg-basWhite"
            ></input>

            <br></br>
            <br></br>

            <label htmlFor="title" className="text-4xl lg:text-5xl">
              Date:
            </label>
            <br></br>
            <input
              type="text"
              id="date"
              className="mt-3 h-10 w-5/6 bg-basWhite"
            ></input>

            <br></br>
            <br></br>

            <label htmlFor="title" className="text-4xl lg:text-5xl">
              Notes:
            </label>
            <br></br>
            <textarea
              id="notes"
              className="mt-3 h-32 w-5/6 bg-basWhite"
            ></textarea>
          </form>
        </div>
        <div className="mt-8 h-full w-1/4">
          <div className="h-1/4 rounded-2xl bg-greenish">
            <h1 className="ml-2 mt-2 pl-4 pt-4 text-2xl lg:text-4xl">
              Note Style
            </h1>
            <select name="choice" className="mx-7 mt-8 h-10 w-5/6 bg-basWhite">
              <option value="cornell" selected>
                Cornell
              </option>
              <option value="second">Second Value</option>
              <option value="third">Third Value</option>
            </select>
            <div className="flex place-content-center items-center">
              <button id="submitButton" className="mt-4 bg-minty px-6 py-2">
                Submit
              </button>
            </div>
          </div>
          <img src="realone.svg" alt="" className="mx-auto mt-32 w-64"></img>
        </div>
      </div>
    </div>
  );
}

const button = document.getElementById("submitButton");

// button.addEventListener("click", function () {
//   const title = document.getElementById("title");
//   console.log(title);
// });
