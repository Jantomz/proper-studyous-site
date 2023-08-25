import { useState } from "react";
import Navbar from "../components/molecules/navbar";

const mp3URL = "/alarm.mp3";

let breakLength = 300;
let workLength = 1500;
let number = workLength;
let mode = "default";
let isPaused = false;

export default function Timer() {
  const [timer, setTimer] = useState(convertSeconds(workLength));
  const [timerRunning, setTimerRunning] = useState(false);
  const [onWork, setOnWork] = useState(true);

  const handleSubmit = () => {
    isPaused = false;
    const timerInterval = setInterval(changeTime, 1000);
    if (isPaused) {
      clearInterval(timerInterval);
    }
    if (onWork && !isPaused) {
      number = workLength;
    } else if (!onWork && !isPaused) {
      number = breakLength;
    }
    setTimerRunning(true);
    function resetTime(endedProperly: boolean) {
      clearInterval(timerInterval);
      const audio = new Audio(mp3URL);
      audio.play();
      if (onWork) {
        setTimer(convertSeconds(breakLength));
      } else {
        setTimer(convertSeconds(workLength));
      }
      setTimeout(function () {
        alert("Timer Ended");
      }, 1000);
      setTimerRunning(false);
      if (endedProperly) {
        setOnWork(!onWork);
      } else {
        if (onWork) {
          setTimer(convertSeconds(workLength));
        } else if (!onWork) {
          setTimer(convertSeconds(breakLength));
        }
      }
    }
    function changeTime() {
      if (!isPaused) {
        number--;
        let stringNum = convertSeconds(number);
        setTimer(stringNum);
        if (number <= 0) {
          resetTime(true);
        }
      } else {
        resetTime(false);
      }
    }
  };

  const resetSubmit = () => {
    isPaused = true;
    setTimerRunning(false);
  };

  function convertSeconds(seconds: number) {
    let minutes = Math.floor(seconds / 60);
    let secondsOnTimer = seconds % 60;
    let formatted =
      minutes.toString().padStart(2, "0") +
      ":" +
      secondsOnTimer.toString().padStart(2, "0");
    return formatted;
  }

  return (
    <main className=" bg-minty">
      <Navbar></Navbar>
      <div className="flex justify-center text-center ">
        <section className="py-40">
          <div id="timer-elem" className="p-12 text-9xl">
            {timer}
          </div>
          {onWork ? <div>Work Mode</div> : <div>Break Mode</div>}
          {timerRunning === true ? (
            <button
              onClick={resetSubmit}
              className="m-8 rounded-full bg-greenish px-12 py-4 font-bold hover:bg-midDarkGreen active:bg-darkGreen"
            >
              Stop and Reset
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="m-8 rounded-full bg-greenish px-12 py-4 font-bold hover:bg-midDarkGreen active:bg-darkGreen"
            >
              Start
            </button>
          )}
        </section>
      </div>
    </main>
  );
}
