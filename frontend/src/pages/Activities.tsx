import AnimatedLetters from "../animation/AnimatedLetters";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animation/varients";
import { events, sessions } from "../data/activities";
import ActivityItem from "../components/Activities/ActivityItem";

const Activities = () => {
  return (
      <div className="py-12">
        <h1 className="text-[28px] md:text-4xl text-center mb-12 md:mb-12 font-medium">
          <AnimatedLetters text={"Our Activities"} />
        </h1>
        <div>
          {/* Sessions */}
          <div className="lg:px-40 md:px-20 px-10">
            <motion.h1
              variants={fadeIn()}
              viewport={{ once: true }}
              initial="initial"
              whileInView="animate"
              className="text-[22px] font-medium md:text-2xl [word-spacing:.2rem] text-center md:text-left mb-5"
            >
              Regular Sessions
            </motion.h1>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
            >
              {sessions.map((session, index) => (
                <ActivityItem session={session} key={index} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
  );
};

export default Activities;
