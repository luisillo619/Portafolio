import { motion } from "framer-motion";
import Image from "next/image";
import fotoPerfil from "../public/assets/foto_de_perfil_2.jpg";
// whileInView propiedad que hace que la animacion se active cuando esta en la vista del ususario

// Flex-shink: 0 indicar que el elemento no debe encogerse para ajustarse al contenedor si hay un espacio insuficiente, 0.5 indica que sede la mitad etc

// justify-evenly reparte el main axis(x) dejando un espacio igual entre cada elemento
export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.8,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-clip"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl md:top-24">
        Acerca de:
      </h3>
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
        viewport={{
          once: true,
        }}
        className="-mb-40 ch:-mb-36 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95"
      >
        <Image
          src={fotoPerfil}
          className="w-full h-full rounded-full object-cover  md:rounded-lg"
          alt="Perfil"
        />
      </motion.div>

      <div className=" -mb-[240px] md:space-y-10 ch:-mb-[150px] md:-mb-[0px] px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Mi pequeño background</h4>
        <p className="text-base my-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          id, vero excepturi ipsam dolore quos, cupiditate, quidem natus
          quisquam quas quaerat pariatur a explicabo corporis aperiam incidunt
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          laborum!
        </p>
      </div>
    </motion.div>
  );
}
