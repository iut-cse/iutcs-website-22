import AnimatedLetters from "../../animation/AnimatedLetters";
import logo from "../../assets/Logo.svg";
const VideoSection = () => {
    return (
        <div className='bg-darkBlue px-10 lg:px-44 py-16 md:py-28'>
            <h1 className='text-4xl md:text-5xl text-left mt-8 mb-12 md:mb-16 font-medium'>
                <AnimatedLetters text={"About"} />
            </h1>
            <div className='flex flex-col justify-center items-center '>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <video width='1244' height='500' controls>
                        <source
                            src='https://drive.google.com/uc?export=download&id=1eqqkBZv8McuGV_EJwYpCNrLlZQZLSx72'
                            type='video/mp4'
                        />
                    </video>
                </div>
                <div className='flex flex-col md:flex-row w-full md:w-5/6 justify-around items-center'>
                    <div className='w-full md:w-3/5 items-center justify-center text-center md:text-left'>
                        <p className='py-8 px-12'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
                            ducimus saepe eveniet, voluptas alias quam atque quia, accusamus
                            aspernatur dolore magnam eligendi explicabo consequuntur possimus
                            illum vero tempore at molestiae laboriosam provident animi. Hic vel
                            non est dolore harum eligendi voluptas alias``
                        </p>
                    </div>

                    <div className='h-90 w-2/5 items-center justify-center md:pl-24'>
                        <img src={logo} alt='logo' height={200} width={200} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoSection;
