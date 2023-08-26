import { useState } from "react";

export default function Header() {
  const [text, setText] = useState("");

  function handleSubmit() {
    if (text.length > 0) {
      setText("");
    } else {
      setText(
        "Thank you for your consideration, however this is just a prototype and we are not accepting donations at this time."
      );
    }
  }
  return (
    <div className="h-[550px] bg-minty p-52 text-center text-9xl max-lg:px-32 max-lg:text-7xl max-md:px-6">
      <div className="max-sm:text-xl">Donate</div>
      <div className="m-auto mt-5 w-1/2 text-lg max-lg:w-full max-lg:text-sm">
        <div>
          The Studyous team believes an ad and membership free experience aids
          in the attempt to curate a distraction free environment available to
          everyone. However, donations are greatly appreciated. Thank you for
          supporting our small startup!
        </div>
        <button
          className=" m-4 mt-48 rounded-full bg-greenish p-3 px-14 text-white max-lg:mt-12"
          value="Donate"
          onClick={handleSubmit}
        >
          Donate
        </button>
        <div>{text}</div>
      </div>
    </div>
  );
}
