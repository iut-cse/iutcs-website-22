import { motion } from "framer-motion";
import { fadeIn } from "../../animation/varients";
import logo from "../../assets/iutcs.jpg";

const CTFAbout = () => {
  return (
    <section className="md:px-16 px-2 my-10 md:my-16">
      <motion.h1
        variants={fadeIn()}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="md:ml-[102px] text-[22px] font-medium md:text-[28px] [word-spacing:.2rem] text-center md:text-left mb-5"
      >
        About Us
      </motion.h1>
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
            className="mb-8 leading-relaxed text-white/80 md:w-3/4 w-5/6 text-base md:text-lg font-medium cardBg text-center md:text-left"
          >
            <p className="p-4 md:p-8 text-sm md:text-base md:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              non quo, eaque facere rerum aliquam enim veritatis provident.
              Doloremque quis sit ipsam illum incidunt, culpa quibusdam, eaque
              quisquam harum explicabo velit sint voluptatem. Aut voluptatibus
              nesciunt dolorem animi, eligendi a officiis, ad rerum incidunt
              provident unde nemo non quod sed totam labore quisquam assumenda
              perspiciatis nam ipsum maxime! Dolor eveniet itaque recusandae
              dolorum ullam culpa exercitationem delectus vel laboriosam labore
              aliquam, dicta molestiae nobis accusamus sequi, eligendi
              praesentium, libero laudantium?non quod
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

export default CTFAbout;
