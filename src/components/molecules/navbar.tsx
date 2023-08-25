import NavbarBtn from "../atoms/navbarBtn";
import LogoHero from "../atoms/logoHero";

export default function Navbar() {
  return (
    <div className="fixed z-10 flex w-full bg-darkGreen">
      <LogoHero></LogoHero>
      <ul className="flex w-full justify-end">
        <li>
          <NavbarBtn name="Notes" goto="/notes"></NavbarBtn>
        </li>
        <li>
          <NavbarBtn name="Timer"></NavbarBtn>
        </li>
        <li>
          <NavbarBtn name="Self-Quiz"></NavbarBtn>
        </li>
        <li>
          <NavbarBtn name="About Us"></NavbarBtn>
        </li>
        <li>
          <NavbarBtn name="Sign In"></NavbarBtn>
        </li>
      </ul>
    </div>
  );
}
