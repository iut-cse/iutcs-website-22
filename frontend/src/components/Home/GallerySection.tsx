import { motion } from "framer-motion";
import AnimatedLetters from "../../animation/AnimatedLetters";
import { galleryContents } from "../../data/galleryContent";

const GallerySection = () => {
  return (
    <>
      <section className="bg-darkBlue body-font relative">
        <div className="container px-12 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8 md:mb-16">
            <h1 className="text-4xl md:text-5xl text-center mb-4 font-medium">
              <AnimatedLetters text={"Around The Corner"} />
            </h1>
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
                className="flex flex-col p-3 md:w-2/5 lg:w-1/4 rounded-xl shadow-sm cardBg"
                key={index}
              >
                <img
                  alt={item.title}
                  src="https://dummyimage.com/600x400"
                  className="object-cover w-full h-56 rounded-md"
                />

                <div className="mt-4 mb-1">
                  <h3 className="text-xl font-medium text-center">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
