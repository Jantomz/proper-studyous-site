export default function Header() {
  return (
    <section>
      <div className="header-container z-40 p-40">
        <div className="py-30 mx-auto my-auto mt-16 h-[350px] w-96 rounded bg-white bg-opacity-60 drop-shadow-lg  backdrop-blur-md transition duration-500 ease-in-out hover:bg-mintWhite hover:bg-opacity-50">
          <h2 className="my-auto ml-auto h-auto w-96 p-5 text-center text-7xl font-bold text-black">
            Study, done <span className="italic text-offsetCyan">your</span>{" "}
            way.
          </h2>
          <div className="flex w-full items-center justify-center">
            <a href="#aboutsec">
              <button
                id="homeLMB"
                className=" m-4 rounded-full bg-greenish p-3 text-white"
              >
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
