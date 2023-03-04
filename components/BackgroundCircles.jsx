import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.5, 1],
        borderRadius: ["20%", "50%", "20%"],
      }}
      transition={{ duration: 1 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333] rounded-full h-[100px] w-[100px] mt-48 animate-ping md:h-[180px] md:w-[180px] md:mt-[200px] lg:h-[200px] lg:w-[200px] lg:mt-52"></div>
      <div className="absolute border border-[#333] rounded-full h-[150px] w-[150px] mt-48 md:h-[270px] md:w-[270px] md:mt-[200px] lg:h-[300px] lg:w-[300px] lg:mt-52"></div>
      <div className="absolute border border-[#333] rounded-full h-[225px] w-[225px] mt-48 md:h-[450px] md:w-[450px] md:mt-[200px] lg:h-[500px] lg:w-[500px] lg:mt-52"></div>
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 h-[350px] w-[350px] mt-48 animate-pulse md:h-[650px] md:w-[650px] md:mt-[200px] lg:h-[700px] lg:w-[700px] lg:mt-52"></div>
    </motion.div>
  );
}