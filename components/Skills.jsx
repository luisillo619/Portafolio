import { motion } from "framer-motion";
import css from "../public/assets/css.png";
import Skill from "./Skill";

const skills = [
  { id: 1, img: css },
  { id: 2, img: css },
  { id: 3, img: css },
  { id: 4, img: css },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0 mx-auto items-center justify-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl md:tracking-[20px]">
        Habilidades
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Presiona una habilidad para ver mi nivel:
      </h3>

      <div className="grid grid-cols-4 gap-2 p-5 pt-20 md:gap-5">
        {skills.map((skill) => (
          <Skill key={skill.id} imageSkill={skill.img} />
        ))}
      </div>
    </motion.div>
  );
}
