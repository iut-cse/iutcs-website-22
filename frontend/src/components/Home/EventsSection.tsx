import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EventsSection = () => {
  return (
    <div className="bg-darkBlue px-10 lg:px-44 py-16 md:py-28">
      <h1 className="text-4xl md:text-5xl text-center mb-12 md:mb-20 font-medium">
        What's Going On
      </h1>
      <div className="">
        <Swiper
          slidesPerView={1}
          navigation={true}
          pagination={{
            type: "bullets",
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {[...Array(4).keys()].map((_, key) => (
            <SwiperSlide className="" key={key}>
              <div>
                <img
                  src="https://dummyimage.com/500x500"
                  alt="events"
                  className="w-full h-[250px] md:h-[500px] object-cover rounded-3xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventsSection;
