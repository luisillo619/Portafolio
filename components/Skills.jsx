import { motion } from "framer-motion";
import Skill from "./Skill";

// mapear y pasar como props
// const skills =[
//     html,
// ]

export default function Skills() {
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
      className="flex flex-col relative h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 xl:space-y-0 min-h-screen justify-center mx-auto items-center overflow-clip"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl md:top-24">
        Habilidades
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Posicione el cursor sobre alguna habilidad para...
      </h3>

      <div className="border border-[#138d6e] grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
