import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import fotoPerfil from "../public/assets/foto_de_perfil.png";
import Link from "next/link";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

// tracking-widest es el espacio entre cada letra
// lg hace referencia a pantallas grandes
// overflow hiden sirve para evitar desbordamientos adaptando el contenido a la pagina total,sin importar que el contenido se corte, pero para eso tenemos over-scroll en el index

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hola",
      "Me llamo Luis",
      "Me-gusta-el-deporte.jsx",
      "<PeroAmoMasProgramar />",
    ],
    loop: true,
    delaySpeed: 300,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-14">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={fotoPerfil}
        alt="Foto de perfil"
        placeholder="blur"
      />

      <div className="z-20">
        <h2 className="text-sm md:text-base uppercase text-gray-500 tracking-widest">
          Desarrollador Full Stack
        </h2>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="text-xl md:text-3xl lg:text-4xl mr-3">{text}</span>
          <Cursor cursorColor="#f7AB0A" />
        </h1>

        <div className="pt-5 space-x-[0px] md:space-x-4">
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
        <div className="pt-5 flex items-center justify-center space-x-2">
          <a
            href="/assets/LuisRangelCV.pdf"
            download
            className="flex items-center justify-center"
          >
            <h4 className="text-lg">CV</h4>
            <ArrowDownTrayIcon className="w-6 h-6 text-[#F7AB0A]" />
          </a>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
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
    <span className="mr-3 text-3xl">{text}</span>
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
  <div className="pt-5 flex items-center justify-center space-x-3 ">
    <h4 className="text-[30px]">CV</h4>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[#F7AB0A]"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>
</div> */
}
