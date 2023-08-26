import ContainerCard from "../atoms/containerCard";
export default function About() {
  const ContentJaden =
    "Hi! I am a 16 year old student, studying computer science and all its amazing aspects! I enjoy learning front-end and am in the process of learning more. I hope that I can make more organized projects in the future! (PLACEHOLDER)";
  const ContentJack =
    "Hey! I’ve been coding in HTML, CSS, JavaScript, MongoDB, Node.js, and several others for over three weeks! I profoundly enjoy coding, solving problems, and working as an equal member of a team! Love you all <3";
  const ContentHarnake =
    "Salutations! I’ve been working with HTML, CSS and JavaScript for the past couple of days. I have a somewhat familiar background in Java and am very excited to take on new challenges and projects.";
  const ContentJake =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Just kidding loll, but I code in HTML, JS, CSS, Java, Python, and google search bar. I enjoy solving problems and making the best projects possible.";
  return (
    <div id="aboutsec" className="rounded-md bg-mintWhite p-20 text-4xl ">
      <div className="max-lg:text-center">About Us:</div>
      <div className=" flex place-content-evenly items-center justify-center gap-12 max-lg:flex-col">
        <ContainerCard title="Jaden" content={ContentJaden}></ContainerCard>
        <ContainerCard title="Jack" content={ContentJack}></ContainerCard>
        <ContainerCard title="Harnake" content={ContentHarnake}></ContainerCard>
        <ContainerCard title="Jake" content={ContentJake}></ContainerCard>
      </div>
    </div>
  );
}
