import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
// snap-mandatory es la forma en la que se va a hacer el snap, en este caso va a ser un snap muy rapido, y snap-y indica que el snap va a ser en el eje de las Y, snap-start indica que elementos hijo van a tener el snap y a que parte del elmento se va a dirijir

//FALTA DECIRLE A LA INTELIGENCIA QUE MEJORE EXPERIENCE Y EXPERIENCECARD y contactMe y header
export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Luis Rangel</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* <section id="experience" className="snap-center">
        <Experience />
      </section> */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href={"#hero"}>
        <footer className="sticky bottom-[4%] w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://th.bing.com/th/id/OIP.tvfHkWZ_RsD5By37v_Zb1AHaJF?pid=ImgDet&rs=1"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
