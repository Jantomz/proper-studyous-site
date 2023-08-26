import Navbar from "../components/molecules/navbar";
import Quiz from "../components/molQ/Quiz";
import Footer from "~/components/molecules/footer";

export default function SelfQuiz() {
  return (
    <main>
      <Navbar></Navbar>
      <Quiz></Quiz>
      <Footer></Footer>
    </main>
  );
}
