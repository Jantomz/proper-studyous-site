export default function LogoHero() {
  return (
    <a
      className="flex items-center justify-center px-8 text-white underline-offset-8 hover:underline"
      href="/"
    >
      <img src="logo.svg" className="m-4 w-12"></img>
      <div className="p-4 text-3xl text-white">Studyous</div>
    </a>
  );
}
