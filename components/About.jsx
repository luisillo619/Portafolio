import { motion } from "framer-motion";
import Image from "next/image";
import fotoPerfil2 from "../public/assets/foto_de_perfil_2.jpg";
// whileInView propiedad que hace que la animacion se active cuando esta en la vista del ususario

// Flex-shink: 0 indicar que el elemento no debe encogerse para ajustarse al contenedor si hay un espacio insuficiente, 0.5 indica que sede la mitad etc
export default function About() {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Acerca de:
      </h3>
      {/* <motion.div
        
        
      >
        pepe
        
      </motion.div> */}
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:w-64 md:h-95 xl:w-[500px]
          xl:h-[600px]"
          src={fotoPerfil2}
          alt="Foto de perfil 2"
          placeholder="blur"
        />
      </motion.div>
      <div><h4 className="text-4xl font-semibold">Esta es mi background</h4></div>
    </div>
  );
}
