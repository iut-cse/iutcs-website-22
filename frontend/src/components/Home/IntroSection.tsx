import { motion } from "framer-motion";
import AnimatedLetters from "../../animation/AnimatedLetters";

const IntroSection = () => {
  return (
    <section className="bg-darkBlue mx-auto md:px-12 py-24 w-full rounded-t-[30px] relative">
      <div className="bg-circleBg bg-cover bg-center bg-no-repeat absolute top-10 left-0 right-0 bottom-0 filter brightness-200" />
      <h1 className="text-4xl md:text-5xl text-center mb-12 md:mb-20 font-medium">
        <AnimatedLetters text={"Who Are We"} />
      </h1>
      <div className="flex md:flex-row flex-col w-full items-center justify-center">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <motion.div
            viewport={{ once: true, margin: "50px 0px 0px 0px" }}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: [-100, 5, 0] }}
            transition={{
              type: "linear",
              delay: 0.8,
              duration: 1,
            }}
            className="mb-8 leading-relaxed text-white/80 md:w-2/3 w-5/6 text-base md:text-lg font-medium cardBg"
          >
            <p className="py-8 px-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              ducimus saepe eveniet, voluptas alias quam atque quia, accusamus
              aspernatur dolore magnam eligendi explicabo consequuntur possimus
              illum vero tempore at molestiae laboriosam provident animi. Hic
              vel non est dolore harum eligendi voluptas alias
            </p>
          </motion.div>
        </div>
        <div className="md:w-1/2 w-5/6 grid place-content-center">
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
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
