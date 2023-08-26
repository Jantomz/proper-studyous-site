export default function ContainerName(props: any) {
  return (
    <div className="mb-3 rounded-xl bg-minty p-3 text-center text-5xl font-semibold max-xl:text-xl">
      <div>{props.name}</div>
    </div>
  );
}
