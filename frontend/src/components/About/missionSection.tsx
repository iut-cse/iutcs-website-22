import AnimatedLetters from "../../animation/AnimatedLetters";
const MissionSection = () => {
  return (
    <div className="bg-darkBlue px-10 lg:px-44 py-16 md:py-28">
      <h1 className='text-4xl md:text-5xl text-left mt-8 mb-12 md:mb-16 font-medium'>
        <AnimatedLetters text={"Our Mission"} />
      </h1>
      <div className='w-full px-8 flex justify-center items-center text-center'>
        <p className='py-8 px-12'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          ducimus saepe eveniet, voluptas alias quam atque quia, accusamus
          aspernatur dolore magnam eligendi explicabo consequuntur possimus
          illum vero tempore at molestiae laboriosam provident animi. Hic vel
          non est dolore harum eligendi voluptas alias``
        </p>
      </div>
    </div>
  );
};

export default MissionSection;
