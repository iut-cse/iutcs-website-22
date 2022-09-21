import AnimatedLetters from "../../animation/AnimatedLetters";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/varients";
const MissionSection = () => {
  return (
    <div className="lg:px-40 md:px-20 px-2 my-12">
      <h1 className="text-3xl md:text-4xl md:text-left text-center mt-8 mb-12 md:mb-16 font-medium">
        <AnimatedLetters text={"Our Mission"} />
      </h1>
      <div className="w-full px-8 flex justify-center items-center text-center">
        <motion.p
          className="md:py-2 md:px-12"
          viewport={{ once: true }}
          variants={fadeIn()}
          initial="initial"
          whileInView="animate"
          transition={{
            type: "easeIn",
            duration: 1,
            delay: 1.2,
          }}
        >
          Being one of the main Societies in IUT, Our Mission is to offer young engineers a
          useful and beneficial platform to develop their intelligence and
          promote their information in computer technology.
        </motion.p>
      </div>
    </div>
  );
};

export default MissionSection;
