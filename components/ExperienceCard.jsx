import { motion } from "framer-motion";
import Image from "next/image";
import imagePerfil from "../public/assets/foto_de_perfil.png";
import amazon from "../public/assets/amazon.jpg"

// space-y-7 aplica un espaciado vertical entre los elementos hijos del contenedor(motion.div y div). En este caso, se aplica un espaciado de 7 unidades de medida (como píxeles o em). funciona de manera similar que un gap en grid. osea que aplica margenes entre los cada elemento hijo
export default function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] ch:w-[550px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]"
      >
        <Image
          src={imagePerfil}
          alt="Amazon"
          className="w-full h-full rounded-full object-cover"
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
        <p className="uppercase py-5 text-gray-300">Empece el trabajo... -Lo termine el...</p>
        {/* cambiar space-y-4 por margin top y margin button */}
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
