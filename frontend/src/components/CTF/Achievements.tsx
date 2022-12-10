import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fadeIn } from "../../animation/varients";
import { ctfAchievements } from "../../data/ctfContents";

interface Props {
  slideNo: number;
}

const AchievementInfoComponent = ({ slideNo }: Props) => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="flex flex-col justify-center items-center md:items-start md:pl-8 md:pr-28 h-full">
      <AnimatePresence mode="wait">
        <motion.h1
          key={isMobile ? null : slideNo}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-xl md:text-2xl mb-3 font-medium"
        >
          {ctfAchievements[slideNo].title}
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-center md:text-left text-white/80 leading-7 text-[13px] md:text-[15px]"
        >
          {ctfAchievements[slideNo].description}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const Achievements = () => {
  const [slideNo, setSlideNo] = useState(0);

  return (
    <div className="px-10 lg:px-32 py-16 md:py-20">
      <motion.h1
        variants={fadeIn()}
        viewport={{ once: true, margin: "200px 0px 0px 0px" }}
        initial="initial"
        whileInView="animate"
        className="md:ml-8 text-[22px] font-medium md:text-[28px] [word-spacing:.2rem] text-center md:text-left mb-5"
      >
        Our Achievements
      </motion.h1>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <AchievementInfoComponent slideNo={slideNo} />
        </div>
        <div className="w-full md:w-1/2  rounded-3xl">
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            navigation={true}
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            onSlideChange={(swiper) => setSlideNo(swiper.activeIndex)}
            className="rounded-3xl"
          >
            {ctfAchievements.map((event, key) => (
              <SwiperSlide className="" key={key}>
                <div>
                  <img
                    src={event.image}
                    alt="events"
                    className="w-full h-[200px] md:h-[400px] object-cover rounded-3xl "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
