export default function Header() {
  return (
    <div className="h-[550px] bg-minty p-60 text-center text-9xl">
      <div>Donate</div>
      <div className="m-auto mt-5 w-1/2 text-lg">
        <div>
          The Studyous team believes an ad and membership free experience aids
          in the attempt to curate a distraction free environment available to
          everyone. However, donations are greatly appreciated. Thank you for
          supporting our small startup!
        </div>
        <input
          type="button"
          className=" m-4 mt-48 rounded-full bg-greenish p-3 px-14 text-white"
          value="Donate"
        ></input>
      </div>
    </div>
  );
}
