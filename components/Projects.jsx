import pokedex from "../public/assets/projects/pokedex.png"
import netflix from"../public/assets/projects/netflix.png"
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    name: "PokeAPI",
    img: pokedex,
    description: "Inspirado en el famoso programa Pokémon, desarrollé un Pokedex el cual permite ver, crear, modificar, filtrar y ordenar Pokémons.",
  },
  {
    name: "Netflix Replica",
    img: netflix,
    description: "Creacion de replica de netflix con la mayoria de funcionalidad de la aplicacion real. Integracion de parasera de pago, sistema de plan de suscripcion y sistema de registro de ususarios",

  },
];

export default function Projects() {
  return (
    <div className="h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-[20px] xs:text-2xl">
          Proyectos
        </h3>

        <div className="relative w-full flex snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 space-x-6 scroll-pb-9">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 snap-center flex flex-col max-h-[100%] space-y-7 items-center justify-center md:p-44 h-screen pt-20 pb-10 md:pt-0 md:pb-0"
            >
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-28 h-28 flex items-center justify-center md:w-32 md:h-32"
              >
                {project.img && (
                  <Image
                    src={project.img}
                    alt={project.name}
                    placeholder="blur"
                    className="w-full h-full object-cover md:rounded-lg"
                  />
                )}
              </motion.div>

              <div className="space-y-10 px-0 md:px-10 max-w-6xl max-h-[50%] overflow-y-auto md:overflow-hidden">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0]/58">
                    Proyecto {index + 1} de {projects.length}:
                  </span>{" "}
                  {project.name}
                </h4>

                <p className="text-lg text-center md:text-left px-3 md:px-0">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full absolute top-[30%] bg-[#D29615]/20 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
    </div>
  );
}