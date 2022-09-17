import { galleryContents } from "../../data/galleryContent";

const GallerySection = () => {
  return (
    <>
      <section className="bg-darkBlue body-font relative">
        <div className="bg-circleBg bg-cover bg-center bg-no-repeat absolute -top-16 left-0 right-0 bottom-0 filter brightness-200" />
        <div className="container px-12 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-8 md:mb-20">
            <h1 className="text-4xl md:text-5xl text-center mb-4">
              About The Corner
            </h1>
          </div>
          <div className="flex flex-wrap lg:px-24">
            {galleryContents.map((item, index) => (
              <div
                className="lg:w-1/3 sm:w-1/2 w-full px-2 py-6 md:p-8"
                key={index}
              >
                <div className="flex flex-col items-center justify-center relative">
                  <img
                    alt="gallery"
                    className=" w-full h-[250px] object-cover object-center rounded-xl"
                    src="https://dummyimage.com/350x250"
                  />
                  <h3 className="text-xl mt-3 font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GallerySection;
