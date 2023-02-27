import { motion } from "framer-motion";
import Image from "next/image";
import css from "../public/assets/css.png";



const props = {
  diectionLeft: Boolean,
};

export default function Skill(props) {
  return (
    <div className="border border-[#b8226b] group relative flex cursor-pointer ">
      <motion.div
        initial={{
          x: props.diectionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className=" border border-gray-500 w-24 h-24 md:w-28p md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={css}
          alt="html imagen"
          className="w-full h-full rounded-full object-cover"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 md:w-28p md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">%100</p>
        </div>
      </div>
    </div>
  );
}
