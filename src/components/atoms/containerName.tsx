export default function ContainerName(props: any) {
  return (
    <div className="mb-3 rounded-xl bg-minty p-3 text-center text-5xl font-semibold">
      <div>{props.name}</div>
    </div>
  );
}
