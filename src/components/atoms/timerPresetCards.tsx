export default function Preset(props: any) {
  return (
    <div className="m-12 rounded-xl bg-veryLight p-2 text-2xl">
      <div className="rounded-md bg-midDarkGreen p-8 text-veryLight">
        <p>{props.breakLength}</p>
        <p>{props.workLength}</p>
      </div>
      <p className="mt-2 rounded-md bg-midDarkGreen p-2 text-center text-veryLight">
        {props.title}
      </p>
    </div>
  );
}
