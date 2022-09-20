import { motion } from "framer-motion";
import AnimatedLetters from "../../animation/AnimatedLetters";
import { galleryContents } from "../../data/galleryContent";
import { Link } from "react-router-dom";

const GallerySection = () => {
  return (
    <>
      <section className="bg-darkBlue body-font relative">
        <div className="container px-12 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8 md:mb-16">
            <h1 className="md:text-5xl text-center mb-4 font-medium hidden md:block">
              <AnimatedLetters text={"Around The Corner"} />
            </h1>
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                type: "linear",
                duration: 1,
              }}
              className="text-4xl text-center mb-4 font-medium block md:hidden leading-relaxed"
            >
              Around The World
            </motion.h1>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 w-full">
            {galleryContents.map((item, index) => (
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "easeIn",
                  duration: 1,
                  delay: index * 0.12,
                }}
                className="flex flex-col p-3 md:w-2/5 lg:w-1/4 w-full rounded-xl shadow-sm cardBg"
                key={index}
              >
                <div className="w-full h-52 rounded-md flex items-center justify-center duration-1000">
                  <img
                    src={item.icon}
                    className="object-cover w-16 md:w-[75px]"
                  />
                </div>

                <Link to={item.path} className="mt-4 mb-4">
                  <h3 className="text-[22px] font-medium text-center">
                    {item.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
