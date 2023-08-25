export default function Header() {
  return (
    <section>
      <div className="h-100 z-40 w-full content-center justify-center bg-greenish py-20">
        <div className="py-30 mx-auto my-auto mt-16 h-full w-96 rounded bg-white bg-opacity-60 drop-shadow-lg backdrop-blur-md">
          <h2 className=" my-auto ml-auto h-1/2 w-96 p-5 text-center text-7xl font-bold text-black">
            Study, done <span className="italic text-offsetCyan">your</span>{" "}
            way.
          </h2>
          <div className="align-center flex w-full">
            <input
              type="button"
              className=" mx-auto my-10 rounded-full bg-greenish p-3 text-white"
              value="Learn More"
            ></input>
          </div>
        </div>
      </div>
    </section>
  );
}
