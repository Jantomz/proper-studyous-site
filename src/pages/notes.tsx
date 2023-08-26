import Navbar from "../components/molecules/navbar";
import MolNotes from "../components/molNotes/noteMain";
import Footer from "~/components/molecules/footer";

export default function Notes() {
  return (
    <main>
      <Navbar></Navbar>
      <MolNotes></MolNotes>
      <Footer></Footer>
    </main>
  );
}
