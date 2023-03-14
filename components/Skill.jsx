import { motion } from "framer-motion";
import Image from "next/image";


// poner un div absoluto dentro de un div flexible y relativo, hace que el absoulto se sobre ponga al relativo. Recordar que relativo deja un espacio aunque esté en otra lugar, no afectando a la posicion de otros elementos, y absoluto obliga a otros elementos a juntarse ya que el elemento se movio completamente de lugar(ocupa un lugar real)
export default function Skill({ imageSkill,level }) {
  return (
    <div className="group relative flex cursor-point mx-auto">
      <motion.div
        initial={{ scaleX: 0, scaleY: 0, opacity: 0 }}
        whileInView={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-full border border-gray-500 w-24 h-24 md:w-20 md:h-20 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          className="w-full h-full rounded-full object-content"
          src={imageSkill}
          alt=""
        />
      </motion.div>

      <motion.div
        initial={{ scaleX: 0, scaleY: 0 }}
        whileInView={{ scaleX: 1, scaleY: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-20 md:h-20 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">{level}</p>
        </div>
      </motion.div>


    </div>
  );
}
