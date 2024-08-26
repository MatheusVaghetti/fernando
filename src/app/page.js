import About from "./components/about";
import Clinica from "./components/clinica";
import Footer from "./components/footer";
import Frase from "./components/frase";
import Hero from "./components/hero";
import Metodo from "./components/metodo";
import Navbar from "./components/navbar";
import Procedimento from "./components/procedimento";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Frase />
      <About />
      <Clinica />
      <Metodo />
      <Procedimento />
      <Footer />
    </main>
  );
}
