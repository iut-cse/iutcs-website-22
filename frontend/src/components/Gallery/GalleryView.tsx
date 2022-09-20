import AnimatedLetters from "../../animation/AnimatedLetters";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../animation/varients";

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
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover grid-"
          />
        </div>
        <div className="md:col-span-2 md:row-span-2">
          <motion.img
            variants={fadeIn()}
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[460px] object-cover "
          />
        </div>
        <div className="md:row-span-2">
          <motion.img
            variants={fadeIn()}
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[460px] object-cover"
          />
        </div>

        <div>
          <motion.img
            variants={fadeIn()}
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover "
          />
        </div>
        <div>
          <motion.img
            variants={fadeIn()}
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover "
          />
        </div>
        <div>
          <motion.img
            variants={fadeIn()}
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
        <div>
          <motion.img
            variants={fadeIn()}
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
        <div className="md:row-span-2 md:-mt-36 mt-0">
          <motion.img
            variants={fadeIn()}
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[444px] object-cover "
          />
        </div>
        <div className="md:col-span-2 md:row-span-2 md:-mt-36 mt-0">
          <motion.img
            variants={fadeIn()}
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[444px] object-cover"
          />
        </div>
        <div>
          <motion.img
            variants={fadeIn()}
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default GalleryView;
