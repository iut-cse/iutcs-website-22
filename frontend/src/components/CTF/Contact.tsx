import { motion } from "framer-motion";
import { fadeIn } from "../../animation/varients";
const Contact = () => {
  return (
    <div>
      <div className="px-10 lg:px-32 py-12 md:py-20">
        <motion.h1
          variants={fadeIn()}
          viewport={{ once: true, margin: "200px 0px 0px 0px" }}
          initial="initial"
          whileInView="animate"
          className="md:ml-8 text-[22px] font-medium md:text-[28px] [word-spacing:.2rem] text-center md:text-left mb-5"
        >
          Contact Us
        </motion.h1>
        <motion.div
          className="md:ml-8 md:max-w-lg p-6 cardBg space-y-2"
          viewport={{ once: true, margin: "200px 0px 0px 0px" }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
          }}
        >
          <p className="font-medium text-base md:text-lg">
            Imtiaz Ahmed Chowdury
          </p>
          <div className="space-y-1 text-sm md:text-base">
            <p className="font-medium text-white/80">Advisor, IUTCS</p>
            <p className="font-medium text-white/80">
              <span>Email: </span>abc@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
