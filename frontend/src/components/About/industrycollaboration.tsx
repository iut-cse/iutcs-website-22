import { motion } from "framer-motion";
import AnimatedLetters from "../../animation/AnimatedLetters";
import collaboration from "../../assets/aboutPage/industrycollaboration.jpg"

function IndustryCollaboration() {
  return (
    <div className="lg:px-40 md:px-16 px-2 my-28">
      <h1 className="text-3xl md:text-4xl md:text-left text-center mt-8 mb-8 md:mb-12 font-medium">
        <AnimatedLetters text={"Industry Collaboration"} />
      </h1>
      <div className="flex flex-col-reverse md:flex-row-reverse justify-evenly items-center">
        <div className="w-full md:w-1/2 rounded-3xl">
          <motion.img
            viewport={{ once: true, margin: "0px 0px -120px 0px" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
            }}
            src={collaboration}
            className="w-full h-[250px] md:h-[400px] rounded-3xl"
          />
        </div>
        <motion.div
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            duration: 0.5,
            delay: 1,
          }}
          className="w-full md:w-1/2 md:mr-20 mt-8 md:mt-0 cardBg"
        >
          <ul className="text-left  mtext-xl md:text-2xl px-4 py-8 md:px-12 md:py-16 list-none">
            <li className="mb-3">Industry Academia Colaboration with top industry experts</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default IndustryCollaboration;
