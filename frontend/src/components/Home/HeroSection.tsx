import { motion } from "framer-motion";
import AnimatedLetters from "../../animation/AnimatedLetters";
import AnimatedTextWord from "../../animation/AnimatedText";
import laptopImg from "../../assets/Laptop.svg";
import neonImg from "../../assets/neon.svg";
import code from "../../assets/codeIcon.png";
import curlyBrace from "../../assets/curlyBrace.png";

const HeroSection = () => {
  return (
    <>
      {/* <div className="bg-overlay bg-cover bg-center bg-no-repeat absolute top-0 left-0 right-0 bottom-0 overflow-hidden" /> */}
      <div className="bg-overlay bg-cover bg-center bg-no-repeat w-screen h-screen flex">
        <div className="w-full flex flex-col items-center justify-center ">
        {/* md:w-1/2 flex flex-col justify-center pl-12 md:pl-36 */}
          <h1 className="text-[92px] md:text-[120px] lg:text-[150px] font-semibold">
            <AnimatedLetters text={"IUTCS"} delay={0.15} />
          </h1>
          <h3
            className="text-[25px] md:text-[32px] lg:text-[41px] font-medium -mt-2 md:-mt-8"
            style={{ wordSpacing: "3px" }}
          >
            <AnimatedTextWord text={"IUT Computer Society"} />
          </h3>
            <a href="#who_are_we" type="button" className="cursor-pointer py-4 px-8 my-16 border shadow rounded-2xl text-lg hover:bg-white hover:text-black transition-all"> Learn More </a>
        </div>
        <div className="w-full hidden md:grid items-center justify-center relative">
        {/* w-1/2 hidden md:flex items-center justify-end  */}
          <div className=" mt-6 mr-12 relative">
            <motion.img
              initial={{ opacity: 0, y: 0, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                delay: 1.3,
                duration: 1,
              }}
              src={laptopImg}
              alt="laptop"
              className="relative z-20 w-[385px] h-[270px]  lg:w-[530px] lg:h-[420px]"
            />
            <motion.img
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                delay: 2,
                duration: 1,
              }}
              src={neonImg}
              alt="neonBorder"
              className="absolute z-10 top-6 left-3 lg:top-8 lg:left-4 w-[265px] h-[400px] lg:w-[400px] lg:h-[620px] float"
            />
            <motion.img
              animate={{ opacity: [0, 1], scale: [0, 1.4, 1] }}
              transition={{
                type: "spring",
                delay: 2.4,
                duration: 1,
              }}
              src={code}
              alt="neonBorder"
              className="absolute top-16 left-0 h-14 w-14 lg:h-20 lg:w-20 iconBg p-2 float-rev"
            />
            <motion.img
              animate={{ opacity: [0, 1], scale: [0, 1.2, 1] }}
              transition={{
                type: "spring",
                delay: 2.8,
                duration: 1,
              }}
              src={curlyBrace}
              alt="neonBorder"
              className="absolute -top-10 left-64 h-14 w-14 lg:h-20 lg:w-20 iconBg p-2 float-rev"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
