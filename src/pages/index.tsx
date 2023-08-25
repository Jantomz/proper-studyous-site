import Navbar from "../components/molecules/navbar";
import Header from "../components/molecules/header";
import About from "../components/molecules/about";
import How from "../components/molecules/how";
import Footer from "../components/molecules/footer";
export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Header></Header>
      <How></How>
      <About></About>
      <Footer></Footer>
    </main>
  );
}
