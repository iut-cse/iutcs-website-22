import AnimatedLetters from "../../animation/AnimatedLetters";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Props {
  slideNo: number;
}

function ActivitySection () {
  const [slideNo, setSlideNo] = useState(0);
  return (
    <div className='bg-darkBlue px-10 lg:px-44 py-16 md:py-28'>
      <h1 className='text-4xl md:text-5xl text-left mt-8 mb-12 md:mb-16 font-medium'>
        <AnimatedLetters text={"Our Activities"} />
      </h1>
      <div className='flex flex-col md:flex-row justify-evenly items-center'>
        <div className='w-full md:w-1/2  rounded-3xl'>
          <Swiper
            slidesPerView={1}
            spaceBetween={50}
            navigation={true}
            pagination={{
              type: "bullets",
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            onSlideChange={swiper => setSlideNo(swiper.activeIndex)}
            className='rounded-3xl'
          >
            {[...Array(4).keys()].map((_, key) => (
              <SwiperSlide className='' key={key}>
                <div>
                  <img
                    src='https://dummyimage.com/500x500'
                    alt='events'
                    className='w-full h-[250px] md:h-[400px] object-cover rounded-3xl'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='md:1/2 ml-20 mt-12 md:mt-0'>
          <ul className='text-left text-2xl md:text-3xl' style={{listStyleType:"disc"}}>
            <li className='mb-3'>Regular Sessions</li>
            <li className='mb-3'>Workshop & Seminars </li>
            <li className='mb-3'>Industry Academia Colaboration</li>
            <li className=''>Arranging Events</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActivitySection;
