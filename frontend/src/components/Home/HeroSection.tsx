const HeroSection = () => {
  return (
    <>
      <div className="bg-overlay bg-cover bg-center bg-no-repeat absolute top-0 left-0 right-0 bottom-0 overflow-hidden" />
      <div className="bg-navyBlue w-screen h-screen flex flex-col justify-center pl-12 md:pl-28">
        <h1 className="text-[92px] md:text-[150px] font-semibold">IUTCS</h1>
        <h3
          className="text-[22px] md:text-[40px] font-medium -mt-2 md:-mt-8"
          style={{ wordSpacing: "3px" }}
        >
          IUT Computer Society
        </h3>
      </div>
    </>
  );
};

export default HeroSection;
