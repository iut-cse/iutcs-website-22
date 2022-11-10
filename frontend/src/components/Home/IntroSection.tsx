import { motion } from "framer-motion";
import AnimatedLetters from "../../animation/AnimatedLetters";
import logo from "../../assets/iutcs.jpg";

const IntroSection = () => {
  return (
    <section className="bg-darkBlue mx-auto md:px-6 py-24 w-full rounded-t-[30px] relative">
      <div className="bg-circleBg bg-cover bg-center bg-no-repeat absolute top-10 left-0 right-0 bottom-0 filter brightness-200" />
      <h1 id="who_are_we" className="text-4xl md:text-5xl text-center mb-12 md:mb-20 font-medium">
        <AnimatedLetters text={"Who Are We"} />
      </h1>
      <div className="flex md:flex-row flex-col w-full items-center justify-center">
        <div className="md:w-3/5 w-full flex justify-center items-center">
          <motion.div
            viewport={{ once: true, margin: "50px 0px 0px 0px" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: [-100, 5, 0] }}
            transition={{
              type: "linear",
              delay: 0.8,
              duration: 1,
            }}
            className="mb-8 leading-relaxed text-white/80 md:w-3/4 w-5/6 text-base md:text-lg font-medium cardBg"
          >
            <p className="p-4 md:p-6 text-sm md:text-base md:leading-relaxed">
              With the purpose of contributing to make an impact on the computer
              engineering community of the whole nation, IUT Computer Society
              was founded in 2008 by the talented students of the department of
              Computer Science and Engineering (CSE) (former CIT) of Islamic
              University of Technology (IUT). Being one of the main Societies in
              IUT, IUTCS offers young engineers a useful and beneficial platform
              to develop their intelligence and promote their information. Our
              vibrant student body organizes numerous activities on a regular
              basis, including programming classes and competitions, application
              development classes, co-curricular aid and projects, etc.We are
              extremely delighted to declare that IUTCS was the first
              organization in our nation to successfully organize the "Prime
              Bank 1st IUT National ICT Fest-2008" in August of 2008 and so far
              continuing to uphold this honor for ten years.
            </p>
          </motion.div>
        </div>
        <div className="md:w-2/5 w-5/6 grid place-content-center md:-mt-8">
          <motion.img
            viewport={{ once: true, margin: "50px 0px 0px 0px" }}
            initial={{ opacity: 0, y: 0, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.3,
              duration: 1,
            }}
            className="object-cover object-center rounded-2xl md:w-[400px] md:h-[400px]"
            alt="hero"
            src={logo}
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
