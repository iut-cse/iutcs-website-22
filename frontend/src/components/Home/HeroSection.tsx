import AnimatedLetters from "../../animation/AnimatedLetters";
import AnimatedTextWord from "../../animation/AnimatedText";
import neonImg from "../../assets/neon.svg";
import laptopImg from "../../assets/Laptop.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <>
      <div className="bg-overlay bg-cover bg-center bg-no-repeat absolute top-0 left-0 right-0 bottom-0 overflow-hidden" />
      <div className="bg-navyBlue w-screen h-screen flex">
        <div className="w-full md:w-1/2 flex flex-col justify-center pl-12 md:pl-28">
          <h1 className="text-[92px] md:text-[120px] lg:text-[150px] font-semibold">
            <AnimatedLetters text={"IUTCS"} delay={0.12} />
          </h1>
          <h3
            className="text-[2px] md:text-[32px] lg:text-[41px] font-medium -mt-2 md:-mt-8"
            style={{ wordSpacing: "3px" }}
          >
            <AnimatedTextWord text={"IUT Computer Society"} />
          </h3>
        </div>
        <div className="w-1/2 hidden md:flex items-center justify-end bg-red">
          <div className=" mt-6 mr-12 relative bg-green">
            <motion.img
              initial={{ opacity: 0, y: 0, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                delay: 0.9,
                duration: 1,
              }}
              src={laptopImg}
              alt="laptop"
              className="relative z-20 w-[300px] h-[268px]  lg:w-[450px] lg:h-[400px]"
            />
            <motion.img
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                delay: 1.5,
                duration: 1,
              }}
              src={neonImg}
              alt="neonBorder"
              className="absolute z-10 top-6 left-3 lg:top-8 lg:left-4 w-[200px] h-[375px] lg:w-[300px] lg:h-[560px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
