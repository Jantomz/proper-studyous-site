import { number } from "zod";
import Navbar from "../components/molecules/navbar";

export default function Timer() {
  return (
    <main>
      <Navbar></Navbar>
      Timer
      <button>CLICK ME</button>
    </main>
  );
}
export function CreateElement() {
  //   let number = 25;
  //   setInterval(changeTime, 1000);
  const numberElem = document.createElement("p");
  numberElem.textContent = "HIHIHIHIHIH";
  numberElem.setAttribute("className", "numberElem");
  document.body.appendChild(numberElem);
}

export function ChangeTime() {
  // numberElem.textContent = String(number--);
}
