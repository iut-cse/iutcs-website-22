import AnimatedLetters from "../../animation/AnimatedLetters";
import logo from "../../assets/Logo.svg";
import { motion } from "framer-motion";
const VideoSection = () => {
  return (
    <div className="lg:px-28 md:px-10 px-10 my-12">
      <h1 className="text-[28px] md:text-4xl text-center mb-12 md:mb-12 font-medium">
        <AnimatedLetters text={"About Us"} />
      </h1>
      <div className="flex flex-col justify-center items-center ">
        <div className="w-full md:w-full flex flex-col justify-center items-center md:px-12 mb-10">
          <iframe
            src="https://drive.google.com/file/d/1eqqkBZv8McuGV_EJwYpCNrLlZQZLSx72/preview"
            allow="autoplay"
            className="rounded-3xl w-full h-[250px] md:h-[600px]"
          />
        </div>
        <div className="flex flex-col md:flex-row w-full md:w-full justify-around items-center mt-10">
          <div className="w-full md:w-3/5 items-center justify-center text-center md:text-left">
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "easeIn",
                duration: 0.7,
                delay: 1,
              }}
              className="py-4 md:py-8 md:pl-12 w-full md:max-w-xl text-white/80"
            >
              With the purpose of contributing to make an impact on the computer
              engineering community of the whole nation, IUT Computer Society
              was founded in 2008 by the talented students of the department of
              Computer Science and Engineering (CSE) (former CIT) of Islamic
              University of Technology (IUT).
            </motion.p>
          </div>

          <div className="h-90 w-2/5 flex items-center justify-end md:pr-12">
            <motion.img
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "linear",
                duration: 0.5,
                delay: 0.2,
              }}
              src={logo}
              alt="logo"
              className="h-48 w-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
