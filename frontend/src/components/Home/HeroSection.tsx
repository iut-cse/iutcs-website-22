import { motion } from "framer-motion";
import AnimatedLetters from "../../animation/AnimatedLetters";
import AnimatedTextWord from "../../animation/AnimatedText";
import { fadeIn } from "../../animation/varients";
const HeroSection = () => {
  return (
    <>
      <div className="bg-overlay bg-cover bg-center bg-no-repeat absolute top-0 left-0 right-0 bottom-0 overflow-hidden" />
      <div className="bg-navyBlue w-screen h-screen flex flex-col justify-center pl-12 md:pl-28">
        <h1
          // variants={fadeIn("up", 1.2)}
          // initial="initial"
          // animate="animate"
          className="text-[92px] md:text-[150px] font-semibold"
        >
          <AnimatedLetters text={"IUTCS"} />
        </h1>
        <h3
          className="text-[22px] md:text-[40px] font-medium -mt-2 md:-mt-8"
          style={{ wordSpacing: "3px" }}
        >
          <AnimatedTextWord text={"IUT Computer Society"} />
        </h3>
      </div>
    </>
  );
};

export default HeroSection;
