import AnimatedLetters from "../../animation/AnimatedLetters";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../animation/varients";
import one from "../../assets/Gallery/1.jpg"
import two from "../../assets/Gallery/2.jpg"
import three from "../../assets/Gallery/3.jpg"
import four from "../../assets/Gallery/4.jpg"
import five from "../../assets/Gallery/5.jpg"
import six from "../../assets/Gallery/6.jpg"
import seven from "../../assets/Gallery/7.jpg"
import eight from "../../assets/Gallery/8.jpg"
import nine from "../../assets/Gallery/9.jpg";
import ten from "../../assets/Gallery/10.jpg";

function GalleryView() {
  return (
    <div className="px-10 lg:px-44 py-16 md:py-28">
      <h1 className="text-[28px] md:text-4xl text-center mb-12 md:mb-12 font-medium">
        <AnimatedLetters text={"Gallery"} />
      </h1>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-row-3 grid-cols-2 md:grid-cols-5 gap-3"
      >
        <div>
          <motion.img
            variants={fadeIn()}
            src={one}
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover grid-"
          />
        </div>
        <div className="md:col-span-2 md:row-span-2">
          <motion.img
            variants={fadeIn()}
            src={two}
            alt="events"
            className="w-full h-[250px] md:h-[460px] object-cover "
          />
        </div>
        <div className="md:row-span-2">
          <motion.img
            variants={fadeIn()}
            src={three}
            alt="events"
            className="w-full h-[250px] md:h-[460px] object-cover"
          />
        </div>

        <div>
          <motion.img
            variants={fadeIn()}
            src={four}
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover "
          />
        </div>
        <div>
          <motion.img
            variants={fadeIn()}
            src={five}
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover "
          />
        </div>
        <div>
          <motion.img
            variants={fadeIn()}
            src={six}
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
        <div>
          <motion.img
            variants={fadeIn()}
            src={seven}
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
        <div className="md:row-span-2 md:-mt-[9.4rem] mt-0">
          <motion.img
            variants={fadeIn()}
            src={eight}
            alt="events"
            className="w-full h-[250px] md:h-[450px] object-cover "
          />
        </div>
        <div className="md:col-span-2 md:row-span-2 md:-mt-[9.4rem] mt-0">
          <motion.img
            variants={fadeIn()}
            src={nine}
            alt="events"
            className="w-full h-[250px] md:h-[450px] object-cover"
          />
        </div>
        <div>
          <motion.img
            variants={fadeIn()}
            src={ten}
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default GalleryView;
