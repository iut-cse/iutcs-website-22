const IntroSection = () => {
  return (
    <section className="bg-darkBlue mx-auto md:px-12 py-24 w-full rounded-t-[30px] relative">
      <div className="bg-circleBg bg-cover bg-center bg-no-repeat absolute top-10 left-10 right-0 bottom-0 filter brightness-200" />
      <h1 className="text-4xl md:text-5xl text-center mb-12 md:mb-20">
        Who Are We
      </h1>
      <div className="flex md:flex-row flex-col w-full items-center justify-center">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <p className="mb-8 leading-relaxed text-white/80 md:w-2/3 w-5/6 text-base md:text-lg font-medium">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            ducimus saepe eveniet, voluptas alias quam atque quia, accusamus
            aspernatur dolore magnam eligendi explicabo consequuntur possimus
            illum vero tempore at molestiae laboriosam provident animi. Hic vel
            non est dolore harum eligendi, nobis rem asperiores dicta aut nisi
            magnam quo corporis unde. Repellat autem,
          </p>
        </div>
        <div className="md:w-1/2 w-5/6 grid place-content-center">
          <img
            className="object-cover object-center rounded-2xl md:w-[400px] md:h-[400px]"
            alt="hero"
            src="https://dummyimage.com/400x400"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
