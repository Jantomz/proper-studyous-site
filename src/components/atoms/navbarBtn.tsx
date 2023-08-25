export default function NavbarBtn(props: any) {
  return (
    <div className="p-8 text-basWhite">
      <a href={props.goto}>
        <button className="font-roboto no-underline underline-offset-8 transition duration-150 ease-in-out hover:underline">
          {props.name}
        </button>
      </a>
    </div>
  );
}
