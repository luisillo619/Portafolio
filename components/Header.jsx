import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

import Link from "next/link";
// En tailwind primero se genera el css en mobile y con la propiedad md se genera para panallas mas grandes.Osea tailwind es first mobile. se tiene que agregar md: para cada propiedad que se quiera modificar
// mx-auto es margin: 0 auto

//media query:
// xl hace referencia a pantallas muy grandes
// md hace referencia a pantallas medianas
// lg hace referencia a pantallas grandes
// max-w-7x1 el div va a tener un ancho maximo de 1280 pixeles independiente de la pantalla.Eso va a hacer que el contenedor poco a poco se vaya al centro despues de 1280
// scale en animate hace referencia al tamaño que va a tener 1=original. En este caso va a ir de la mitad al tamaño origianl
export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-row items-center "
    >
      {/* icons */}
      <SocialIcon
        url="https://www.linkedin.com/in/luisrangel-lagunes/"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/luisrangel-lagunes/"
        fgColor="gray"
        bgColor="transparent"
      />
      <SocialIcon
        url="https://www.linkedin.com/in/luisrangel-lagunes/"
        fgColor="gray"
        bgColor="transparent"
      />
    </motion.div>

    <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="flex flex-row items-center text-gray-300 cursor-pointer space-x-4"
    >
      <SocialIcon
        url="#contact"
        className="cursor-pointer"
        network="email"
        fgColor="gray"
        bgColor="transparent"
      />

      {/* diplay hidden para oculta y en pc diplay inline-flex */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="uppercase hidden md:inline-flex text-sm text-gray-400 cursor-pointer"
      >
        <Link href="#contact">Contactame</Link>
      </motion.p>
    </motion.div>
  </header>
  );
}
