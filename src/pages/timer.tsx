import { useState } from "react";
import Navbar from "../components/molecules/navbar";
import Preset from "../components/atoms/timerPresetCards";
import ToDo from "../components/molecules/toDo";

const mp3URL = "/alarm.mp3";

let breakLength = 300;
let workLength = 1500;
let number = workLength;
let mode = "Pomodoro";
let isPaused = false;

export default function Timer() {
  const [timer, setTimer] = useState(convertSeconds(workLength));
  const [timerRunning, setTimerRunning] = useState(false);
  const [onWork, setOnWork] = useState(true);

  const setDefault = () => {
    resetSubmit();

    breakLength = 300;
    workLength = 1500;
    setTimer(convertSeconds(workLength));
    mode = "Pomodoro";
  };

  const setTJ = () => {
    resetSubmit();

    breakLength = 1200;
    workLength = 2700;
    setTimer(convertSeconds(workLength));
    mode = "TJ Method";
  };

  const setShort = () => {
    resetSubmit();

    breakLength = 300;
    workLength = 1200;
    setTimer(convertSeconds(workLength));
    mode = "Short Session";
  };

  const setLong = () => {
    resetSubmit();
    breakLength = 900;
    workLength = 2400;
    setTimer(convertSeconds(workLength));
    mode = "Long Session";
  };

  const setJart = () => {
    resetSubmit();

    breakLength = 15;
    workLength = 10;
    setTimer(convertSeconds(workLength));
    mode = "Jart";
  };

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
      if (onWork) {
        setTimer(convertSeconds(breakLength));
      } else {
        setTimer(convertSeconds(workLength));
      }
      setTimerRunning(false);
      if (endedProperly) {
        setTimeout(function () {
          alert("Timer Ended");
        }, 500);
        const audio = new Audio(mp3URL);
        audio.play();
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
      <div className="absolute left-10 top-64">
        <ToDo></ToDo>
      </div>
      <div className="flex justify-center pt-20 text-center">
        <section className="py-40">
          <div className="flex justify-center">
            {onWork ? (
              <div className="p-2 text-xl font-bold text-midDarkGreen">
                Work Mode
              </div>
            ) : (
              <div className="p-2 text-xl font-bold text-midDarkGreen">
                Break Mode
              </div>
            )}
          </div>

          <div
            id="timer-elem"
            className="p-12 pt-0 text-9xl font-bold max-sm:p-6 max-sm:text-6xl"
          >
            {timer}
          </div>

          <div className="text-4xl max-sm:text-xl">{mode} Timer</div>

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
      <div className=" bg-greenish p-12">
        <p className="text-center text-6xl">Study Timer Presets</p>
        <div className="flex justify-center max-xl:flex-col">
          <button onClick={setDefault}>
            <Preset
              title="Pomodoro"
              workLength="Work (25mins)"
              breakLength="Break (5mins)"
            ></Preset>
          </button>
          <button onClick={setTJ}>
            <Preset
              title="TJ Method"
              workLength="Work (45mins)"
              breakLength="Break (20mins)"
            ></Preset>
          </button>
          <button onClick={setShort}>
            <Preset
              title="Short Session"
              workLength="Work (20mins)"
              breakLength="Break (5mins)"
            ></Preset>
          </button>
          <button onClick={setLong}>
            <Preset
              title="Long Session"
              workLength="Work (40mins)"
              breakLength="Break (15mins)"
            ></Preset>
          </button>
          <button onClick={setJart}>
            <Preset
              title="Jart"
              workLength="Work (10s)"
              breakLength="Break (15s)"
            ></Preset>
          </button>
        </div>
      </div>
    </main>
  );
}
