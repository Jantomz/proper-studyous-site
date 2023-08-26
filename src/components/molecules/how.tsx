export default function How() {
  return (
    <section id="hiwSec" className="bg-minty max-lg:text-center">
      <h1 className="mb-4 px-20 py-8 text-4xl max-lg:text-center">
        How it Works:
      </h1>
      <div className=" flex content-center justify-center ">
        <div className="flex items-center justify-center gap-2 max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <div className="border-1 mx-10 w-1/4 rounded-xl bg-greenish p-3 max-lg:w-4/5">
            <p className="text-sm lg:text-lg">
              Our note-formatting program enables you to take control of the way
              your notes are presented to you. Often, students will struggle
              with the readability of their notes, meaning that even if the
              notes are in-depth, they might make little sense to the reader.
              Fortunately, the writer needn't fear of reading their notes, for
              our note-formatter will make them appear far more appealing!
            </p>
            <div className="z-50 mx-5 mt-4 flex h-16 content-end items-center justify-center rounded-xl bg-minty text-center text-2xl">
              <div className="max-sm:text-sm">Notes</div>
            </div>
          </div>
          <div className="border-1 m-8 mx-10 w-1/4 rounded-xl bg-greenish p-3 max-lg:w-4/5">
            <p className="text-sm lg:text-lg">
              Alternatively, our timer program enables you to keep track of how
              long you spend studying and taking breaks. Modeled off of custom
              timers and more popular ones, such as the Pomodoro, you can
              customize between larger or smaller breaks, as well as change the
              time you spend working. Furthermore, there is a To-Do list
              included with the timer, so you can cross off the items that you
              finish!
            </p>
            <div className="z-50 mx-5 mt-4 flex h-16 content-end items-center justify-center rounded-xl bg-minty text-center text-2xl">
              <div className="max-sm:text-sm">Timer</div>
            </div>
          </div>
          <div className="border-1 mx-10 w-1/4 rounded-xl bg-greenish p-3 max-lg:w-4/5">
            <p className="text-sm lg:text-lg">
              Lastly, feel free to use our self-quiz program, in which you can
              input any questions and answers you may come up with while
              studying. Then, when you are ready, the program will select a
              random question and display it, similar to the way in which a
              flashcard works. This will repeat until the user runs out of
              questions. They can input questions and answers to their heart's
              content!
            </p>
            <div className="z-50 mx-5 mt-4 flex h-16 content-end items-center justify-center rounded-xl bg-minty text-center text-2xl">
              <div className="max-sm:text-sm">Self-Quiz</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
