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
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Acerca de:
      </h3>

      <motion.img
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
        src="https://th.bing.com/th/id/R.1fad33dff494a8fcfac188efebfdc385?rik=XOrBWRByWzBgaQ&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fdragonballfanon%2fimages%2f6%2f68%2fDragon_ball_kid_goku_21_by_superjmanplay2-d5roz2f.png%2frevision%2flatest%3fcb%3d20130303235513%26path-prefix%3des&ehk=uQjbANIYjQSEptwFv7qY6pFK6MbetFbHqeR%2fPN6xJOg%3d&risl=&pid=ImgRaw&r=0"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95"
      />
      <div className="bg-[#643b3b] space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Mi pequeño background</h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          id, vero excepturi ipsam dolore quos, cupiditate, quidem natus
          quisquam quas quaerat pariatur a explicabo corporis aperiam incidunt
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          minus quos alias quisquam vero quas officia fugiat velit quasi
        </p>
      </div>
    </motion.div>
  );
}
