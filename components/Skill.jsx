import { motion } from "framer-motion";
import Image from "next/image";
import css from "../public/assets/css.png";



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
    </div>
  );
}
