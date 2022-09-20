import AnimatedLetters from "../../animation/AnimatedLetters";

function GalleryView() {
  return (
      <div className="bg-darkBlue px-10 lg:px-44 py-16 md:py-28">
          <h1 className='text-4xl md:text-5xl text-left mt-8 mb-12 md:mb-16 font-medium'>
        <AnimatedLetters text={"Gallery"} />
      </h1>
      <div className="grid grid-row-3 grid-cols-2 md:grid-cols-5 gap-3">
        <div>
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover grid-"
          />
        </div>
        <div className="md:col-span-2 md:row-span-2">
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[460px] object-cover "
          />
        </div>
        <div className="md:row-span-2">
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[460px] object-cover"
          />
        </div>

        <div>
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover "
          />
        </div>
        <div>
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover "
          />
        </div>
        <div>
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
        <div>
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
        <div className="md:row-span-2 md:-mt-36 mt-0">
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[444px] object-cover "
          />
        </div>
        <div className="md:col-span-2 md:row-span-2 md:-mt-36 mt-0">
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[444px] object-cover"
          />
        </div>
        <div>
          <img
            src="https://dummyimage.com/500x500"
            alt="events"
            className="w-full h-[250px] md:h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default GalleryView;
