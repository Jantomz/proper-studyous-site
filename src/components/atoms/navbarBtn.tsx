export default function NavbarBtn(props: any) {
  return (
    <div className="p-8 text-basWhite">
      <a href={props.goto}>
        <button className="navbar-btn">{props.name}</button>
      </a>
    </div>
  );
}
