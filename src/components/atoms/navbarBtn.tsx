export default function NavbarBtn(props: any) {
  return (
    <div className="p-8 text-basWhite max-sm:p-1.5 max-sm:text-sm">
      <a href={props.goto}>
        <button className="navbar-btn">{props.name}</button>
      </a>
    </div>
  );
}
