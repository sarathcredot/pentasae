
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
export default function Home() {

  return (
    <div className="w-full h-screen  text-white " >

      <Navbar />
      <section id="home">
        <Banner />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>


    </div>
  );
}
