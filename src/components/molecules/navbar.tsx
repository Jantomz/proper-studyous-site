import NavbarBtn from "../atoms/navbarBtn";
import LogoHero from "../atoms/logoHero";

export default function Navbar() {
  return (
    <div
      className="fixed z-10 flex w-full bg-midDarkGreenTrans max-lg:block"
      id="navbar"
    >
      <div className="z-40">
        <LogoHero></LogoHero>
      </div>
      <svg height="100" width="500" className="absolute z-10 max-lg:hidden">
        <polygon
          points="0,0 0,100 300,100 400,50 300,0 "
          className="fill-darkestGreenTrans stroke-none"
        ></polygon>
      </svg>

      <ul className="flex h-[100px] w-full justify-end max-lg:justify-center max-sm:h-12">
        <li>
          <NavbarBtn name="Notes" goto="/notes"></NavbarBtn>
        </li>
        <li>
          <NavbarBtn name="Timer" goto="/timer"></NavbarBtn>
        </li>
        <li>
          <NavbarBtn name="Self-Quiz" goto="/selfQuiz"></NavbarBtn>
        </li>
        <li>
          <NavbarBtn name="About Us" goto="/#aboutsec"></NavbarBtn>
        </li>
        <li>
          <NavbarBtn name="Donate" goto="/donate"></NavbarBtn>
        </li>
      </ul>
    </div>
  );
}
