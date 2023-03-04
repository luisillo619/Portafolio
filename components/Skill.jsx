import { motion } from "framer-motion";
import Image from "next/image";
import css from "../public/assets/css.png";


// poner un div absoluto dentro de un div flexible y relativo, hace que el absoulto se sobre ponga al relativo. Recordar que relativo deja un espacio aunque esté en otra lugar, no afectando a la posicion de otros elementos, y absoluto obliga a otros elementos a juntarse ya que el elemento se movio completamente de lugar(ocupa un lugar real) 
export default function Skill() {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: true ? -50 : 50,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1.2 }}
        
        className="rounded-full border border-gray-500 w-20 h-20 xl:w-32 xl:h-32 filter md:w-28 md:h-28 group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          className="w-full h-full rounded-full object-cover"
          src={css}
          alt=""
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}


{/* <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: true ? -50 : 50,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ duration: 1.2 }}
        className="rounded-full border border-gray-500 w-24 h-24 xl:w-32 xl:h-32 filter md:w-28 md:h-28 group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          className="w-full h-full rounded-full object-cover"
          src={css}
          alt=""
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80  transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div> */}