import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import fotoPerfil from "../public/assets/foto_de_perfil.png";
import Link from "next/link";
import Image from "next/image";
// tracking-widest es el espacio entre cada letra
// lg hace referencia a pantallas grandes
// overflow hiden sirve para evitar desbordamientos adaptando el contenido a la pagina total,sin importar que el contenido se corte, pero para eso tenemos over-scroll en el index

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hola",
      "Me llamo Luis",
      "Soy-un-joven-que-le-gusta-el-deporte.jsx",
      "<PeroAmoMasCodear />",
    ],
    loop: true,
    delaySpeed: 300,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={fotoPerfil}
        alt="foto de perfil"
        placeholder="blur"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 tracking-[9px]">
          Desarollador fullstack
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10  ">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#f7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">Acerca de</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experiencia</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Habilidades</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Proyectos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
