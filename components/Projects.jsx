import pokeApi from "../public/assets/html.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Projects() {
  const projects = [
    {
      name: "pokeApi",
      img: pokeApi,
      description: "deleniti?",
    },
    {
      name: "pokeApi",
      img: pokeApi,
      description:
        "Ls voluptatum magnam, suscipit at nobis odit expedita. Ducimus, in deleniti? llorfffffffd fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd fdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf ddddddddddd sadasd asddddd saaaaaaaaaaaaa saaaaaaaaaaaa saaaaaaaa asd sdasd asdasd asdasd sadsad",
    },
  ];
  return (
    <div className="h-screen">
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
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Proyectos
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                //ocupan todo el ancho y flex-shrink impide que alguno ceda espacio, entonces hace el slider
                className="w-full flex-shrink-0 snap-center flex flex-col max-h-[100%] space-y-7 items-center justify-center md:p-44 h-screen pt-20 md:pt-0"
              >
                <motion.div
                  initial={{
                    y: -100,
                    opacity: 0,
                  }}
                  transition={{ duration: 1.2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="w-28 h-28 flex items-center justify-center md:w-32 md:h-32"
                >
                  <Image
                    src={project.img}
                    alt="PokeApi"
                    className="w-full h-full object-cover md:rounded-lg"
                  />
                </motion.div>

                <div className="space-y-10 px-0 md:px-10 max-w-6xl max-h-[50%] overflow-y-auto md:overflow-hidden">
                  <h4 className=" text-4xl font-semibold text-center">
                    <span className="underline decoration-[#F7AB0]/58">
                      Proyecto {index + 1} of {projects.length}:
                    </span>{" "}
                    {project.name}
                  </h4>

                  <p className="text-lg text-center md:text-left px-3 md:px-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam temporibus, quam quos nobis, sed ut quasi molestiae
                    iusto possimus fugiat vel? Libero placeat nulla eveniet
                    accusamus sapiente, eligendi quam minima!
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full absolute top-[30%] bg-[#ff0000]/20 left-0 h-[500px] -skew-y-12"></div>
      </motion.div>
    </div>
  );
}
