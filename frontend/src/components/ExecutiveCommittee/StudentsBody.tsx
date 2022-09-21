import { motion } from "framer-motion";
import { fadeIn } from "../../animation/varients";
import { studentBodyContents } from "../../data/committeeContents";
const StudentsBody = () => {
  return (
    <div className="lg:px-40 md:px-20 px-10 mt-32">
      <motion.h1
        variants={fadeIn()}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="text-[22px] font-medium md:text-2xl [word-spacing:.2rem] text-center md:text-left mb-4"
      >
        Students Body
      </motion.h1>
      <div className="grid lg:grid-cols-4 place-content-center gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {studentBodyContents.map((item, index) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "easeIn",
              duration: 1,
              delay: index * 0.08,
            }}
            className="flex flex-col p-3 w-full rounded-xl shadow-sm cardBg"
            key={index}
          >
            <div className="w-full h-56 rounded-md flex items-center justify-center">
              <img
                src={item.picture}
                alt=""
                className="object-cover w-full h-56 rounded-md"
              />
            </div>

            <div className="mt-4 mb-1">
              <h3 className="text-lg font-medium text-center mb-1">
                {item.name}
              </h3>
              <p className="text-base text-white/80 font-medium text-center">
                {item.position}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StudentsBody;
