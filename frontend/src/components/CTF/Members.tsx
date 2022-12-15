import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ctfMembers } from "../../data/ctfContents";
import { fadeIn } from "../../animation/varients";
import { motion } from "framer-motion";

const MemberComponent = ({ member }: any) => {
  return (
    <div className="relative overflow-hidden group cardBg flex flex-col h-full items-stretch">
      <img
        src={member.picture}
        alt={member.name}
        className="object-cover w-full h-[250px] p-3"
      />

      <h3 className="mt-2 text-lg font-medium text-white text-center">
        {member.name}
      </h3>

      <div className="mt-2 mb-4">
        <h3 className="text-base font-medium text-center mb-1">
          {member.team}
        </h3>
        <p className="text-sm text-white/80 font-medium text-center">
          {member.description}
        </p>
        <div className="flex text-[13px] font-medium justify-center flex-wrap my-2">
          {member.attributes.map((attr: any, i: number) => (
            <p
              key={i}
              className="bg-white/80 text-darkBlue mx-1 my-1 px-3 py-[1px] rounded-xl"
            >
              {attr}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const CTFMembers = () => {
  return (
    <div className="px-10 lg:pl-40 lg:pr-32 py-16 md:py-20">
      <motion.h1
        variants={fadeIn()}
        viewport={{ once: true, margin: "200px 0px 0px 0px" }}
        initial="initial"
        whileInView="animate"
        className="text-[22px] font-medium md:text-[28px] [word-spacing:.2rem] text-center md:text-left mb-8"
      >
        Our Members
      </motion.h1>
      <Swiper
        breakpoints={{
          480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          650: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        spaceBetween={40}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="memberSwiper"
      >
        {ctfMembers?.map((member, i) => (
          <SwiperSlide key={member.name}>
            <MemberComponent member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CTFMembers;
