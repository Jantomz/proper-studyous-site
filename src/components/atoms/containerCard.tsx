import ContainerName from "./containerName";

export default function ContainerCard(props: any) {
  return (
    <div className="mt-10 w-80 rounded-xl bg-greenish p-8 pb-4 pt-8 text-base">
      <ContainerName name={props.title}></ContainerName>
      <div>{props.content}</div>
    </div>
  );
}
