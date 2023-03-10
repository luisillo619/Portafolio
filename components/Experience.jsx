import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
// overflow-hidden sirve para evitar desbordamientos adaptando el contenido a la pagina total,sin importar que el contenido se corte, pero para eso tenemos over-scroll en el index

// recordando que tailwind es first mobile por eso ocupamos flex-col, ya despues se adapta a pc con md o lg etc

// max-w-full Esta propiedad es útil para garantizar que un elemento no exceda el ancho del contenedor, lo que podría ocasionar problemas de visualización en dispositivos con diferentes tamaños de pantalla.

// space-x-10 es como un space-between o evenly, indica que entre cada elemento hijo(entre cada experienceCard) va a ver un espacio horizontal. quiere decir que va a ver un margen interno left y rigth similar al gap de grid

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experiencia
      </h3>

      <div className=" w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
