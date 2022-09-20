import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnimatedLetters from "../../animation/AnimatedLetters";
import { eventsContents } from "../../data/eventsContents";

interface Props {
  slideNo: number;
}

const EventInfoComponent = ({ slideNo }: Props) => {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="flex flex-col justify-center items-center md:items-start md:pl-8 md:pr-28 h-full">
      <AnimatePresence exitBeforeEnter>
        <motion.h1
          key={isMobile ? null : slideNo}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="text-3xl mb-3 font-medium"
        >
          {eventsContents[slideNo].title}
        </motion.h1>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="text-center md:text-left text-white/80 leading-7"
        >
          {eventsContents[slideNo].description}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

const EventsSection = () => {
  const [slideNo, setSlideNo] = useState(0);

  return (
    <div className="bg-darkBlue px-10 lg:px-44 py-16 md:py-28">
      <h1 className="text-4xl md:text-5xl text-center mb-12 md:mb-20 font-medium">
        <AnimatedLetters text={"What's Going On"} />
      </h1>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <EventInfoComponent slideNo={slideNo} />
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
            {eventsContents.map((event, key) => (
              <SwiperSlide className="" key={key}>
                <div>
                  <img
                    src={event.image}
                    alt="events"
                    className="w-full h-[250px] md:h-[500px] object-cover rounded-3xl"
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

export default EventsSection;
