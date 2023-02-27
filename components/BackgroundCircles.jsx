import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      animate={{
        scale:[1,1.5,2,1],
        opacity:[0.2,0.3,0.4,0.8,0.1,1],
      
      }}
      transition={{
        duration:2.5
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border-2 border-[#000000] rounded-full h-[200px] w-[200px] mt-52 animate-ping " />
      <div className="rounded-full border-2 border-[#333333]  h-[300px] w-[300px] absolute mt-52 " />
      <div className="rounded-full border-2 border-[#333333]  h-[500px] w-[500px] absolute mt-52 " />
      <div className="rounded-full border-2 border-[#F7AB0A] opacity-20  h-[650px] w-[650px] absolute mt-52 " />
      <div className="rounded-full border-2 border-[#333333]  h-[800px] w-[800px] absolute mt-52" />
    </motion.div>
  );
}
