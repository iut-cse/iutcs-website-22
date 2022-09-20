import AnimatedLetters from "../../animation/AnimatedLetters";

interface newsProps {
  title: string;
  text: string;
  imageUrl: string;
}
function NewAndBlogsView ({ title, text, imageUrl }: newsProps) {
  return (
    <div className='bg-darkBlue px-10 lg:px-44 py-16 md:py-28'>
      <h1 className='text-4xl md:text-5xl text-left mt-8 mb-12 md:mb-16 font-medium'>
        <AnimatedLetters text={"News & Blogs"} />
      </h1>
      <div className='flex w-full justify-center items-center rounded-3xl bg-navyBlueLight p-10'>
        <div className='flex w-1/2 flex-col justify-center items-center'>
          <h1 className='text-left text-4xl'>Title1</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            ducimus saepe eveniet, voluptas alias quam atque quia, accusamus
            aspernatur dolore magnam eligendi explicabo consequuntur possimus
            illum vero tempore at molestiae laboriosam provident animi. Hic vel
            non est dolore harum eligendi voluptas alias
          </p>
        </div>
        <div className='w-1/2'>
          <img
            src='https://dummyimage.com/500x500'
            alt='Blogs'
            className='w-full h-[250px] md:h-[500px] object-cover rounded-3xl'
          />
        </div>
      </div>
    </div>
  );
}

export default NewAndBlogsView;
