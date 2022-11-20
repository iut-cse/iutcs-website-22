import AnimatedLetters from "../animation/AnimatedLetters";
import { sponsors } from "../data/sponsors";
import { motion } from "framer-motion";

const Sponsors = () => {
  return (
      <div className="lg:px-40 md:px-20 px-10 my-12">
        <h1 className="text-3xl md:text-4xl text-center mb-12 md:mb-20 font-medium">
          <AnimatedLetters text={"Sponsors"} />
        </h1>
        <div className="grid lg:grid-cols-4 place-content-center gap-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {sponsors.map((item, index) => (
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                type: "easeIn",
                duration: 1,
                delay: index * 0.15,
              }}
              className="flex flex-col w-full rounded-3xl shadow-sm relative"
              key={index}
            >
              <div className="w-full h-60 rounded-2xl flex items-center justify-center">
                <img
                  src={item.logo}
                  alt=""
                  className="object-cover w-full h-full rounded-2xl bg-white"
                />
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 h-full px-2 flex items-center justify-center bg-navyBlueLight/80 rounded-2xl opacity-0 hover:opacity-100 transition-all duration-500 ease-out">
                <h3 className="text-2xl font-medium text-center mb-1 filter brightness-150">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  );
};

export default Sponsors;
