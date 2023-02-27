import { motion } from "framer-motion";
import Image from "next/image";
import imagePerfil from "../public/assets/foto_de_perfil.png";
import amazon from "../public/assets/amazon.jpg"
export default function ExperienceCard() {
  return (
    <article>
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="border border-[#ffffff] w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]"
      >
        <Image
          src={imagePerfil}
          alt="Amazon"
          className="w-full h-full rounded-full object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">TRABAJE EN UNAM</h4>
        <p className="font-bold text-2xl mt-1">UNAM</p>
        <div className="flex space-x-2">
            
            {/* tecnologias */}
            <Image className="h-10 w-10 rounded-full" src={amazon} alt="Amazon"/>
            <Image className="h-10 w-10 rounded-full" src={amazon} alt="Amazon"/>
            <Image className="h-10 w-10 rounded-full" src={amazon} alt="Amazon"/>
            <Image className="h-10 w-10 rounded-full" src={amazon} alt="Amazon"/>
            </div>
        <p>Empece el trabajo... -Lo termine el...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
