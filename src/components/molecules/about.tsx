import ContainerCard from "../atoms/containerCard";
export default function About() {
  const ContentJaden =
    "Hey guys, did you know that in terms  of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals";
  const ContentJack =
    "Hey! I’ve been coding in HTML, CSS, JavaScript, MongoDB, Node.js, and several others for over three weeks! I profoundly enjoy coding, solving problems, and working as an equal member of a team! Love you all <3";
  const ContentHarnake =
    "Salutations! I’ve been working with HTML, CSS and JavaScript for the past couple of days. I have a somewhat familiar background in Java and am very excited to take on new challenges and projects.";
  const ContentJake =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Just kidding loll, but I code in HTML, JS, CSS, Java, Python, and google search bar. I enjoy solving problems and making the best projects possible.";
  return (
    <div id="aboutsec" className="rounded-md bg-mintWhite p-20 text-4xl">
      <div>About Us:</div>
      <div className=" place-content-evenly gap-12 md:flex">
        <ContainerCard title="Jaden" content={ContentJaden}></ContainerCard>
        <ContainerCard title="Jack" content={ContentJack}></ContainerCard>
        <ContainerCard title="Harnake" content={ContentHarnake}></ContainerCard>
        <ContainerCard title="Jake" content={ContentJake}></ContainerCard>
      </div>
    </div>
  );
}
