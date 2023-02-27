import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
// overflow-hidden sirve para evitar desbordamientos adaptando el contenido a la pagina total,sin importar que el contenido se corte, pero para eso tenemos over-scroll en el index

// recordando que tailwind es first mobile por eso ocupamos flex-col, ya despues se adapta a pc con md o lg etc

// max-w-full Esta propiedad es útil para garantizar que un elemento no exceda el ancho del contenedor, lo que podría ocasionar problemas de visualización en dispositivos con diferentes tamaños de pantalla.

export default function Experience() {
  return (
    <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl md:top-24">
        Experiencia
      </h3>
      <div>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}
