import { motion } from "framer-motion";
import Image from "next/image";
import fotoPerfil from "../public/assets/foto_de_perfil_2.jpg";
// whileInView propiedad que hace que la animacion se active cuando esta en la vista del ususario

// Flex-shink: 0 indicar que el elemento no debe encogerse para ajustarse al contenedor si hay un espacio insuficiente, 0.5 indica que sede la mitad etc

// justify-evenly reparte el main axis(x) dejando un espacio igual entre cada elemento

// space-y-7 aplica un espaciado vertical entre los elementos hijos del contenedor. En este caso, se aplica un espaciado de 7 unidades de medida (como píxeles o em). funciona de manera similar que un gap en grid. osea que aplica margenes entre los cada elemento hijo

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Acerca de mi
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          className="w-full h-full rounded-full object-cover md:rounded-lg"
          src={fotoPerfil}
          alt=""
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Es mi{" "}
          <span className="underline decoration-[#F7AB0A]/50">pequeño</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          corrupti autem, nemo atque sapiente magnam error praesentium! Quaerat
          deserunt veritatis consequatur nulla porro. Quae numquam error
          dignissimos unde maiores expedita? Reiciendis cupiditate, perferendis
          fugit voluptate nobis harum neque repellat quisquam eius beatae sit
          sequi fugiat quam quidem corrupti architecto totam aspernatur et
          praesentium obcaecati molestias voluptas. Optio, rerum! Illum, porro!
        </p>
      </div>
    </motion.div>
  );
}
