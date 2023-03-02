import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 1.3, 1.6, 2, 1],
        opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 2, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 1.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333] rounded-full h-[100px] w-[100px] mt-48 animate-ping md:h-[180px] md:w-[180px] md:mt-[200px] lg:h-[200px] lg:w-[200px] lg:mt-52"></div>
      <div className="absolute border border-[#333] rounded-full h-[150px] w-[150px] mt-48 md:h-[270px] md:w-[270px] md:mt-[200px] lg:h-[300px] lg:w-[300px] lg:mt-52"></div>
      <div className="absolute border border-[#333] rounded-full h-[225px] w-[225px] mt-48 md:h-[450px] md:w-[450px] md:mt-[200px] lg:h-[500px] lg:w-[500px] lg:mt-52"></div>
      <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 h-[293px] w-[293px] mt-48 animate-pulse md:h-[585px] md:w-[585px] md:mt-[200px] lg:h-[650px] lg:w-[650px] lg:mt-52"></div>
    </motion.div>
  );
}

{
  /* <div className="absolute border border-[#333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"></div>

      <div className="absolute border border-[#333] rounded-full h-[300px] w-[300px] mt-52"></div>

      <div className="absolute border border-[#333] rounded-full h-[500px] w-[500px] mt-52"></div>

      <div className="absolute border border-[#F7AB0A] rounded-full opacity-20 h-[650px] w-[650px] mt-52 animate-pulse"></div> */
}
