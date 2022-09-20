import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer";
import NewAndBlogsView from "../components/NewsAndBlogs/NewAndBlogsView";
import AnimatedLetters from "../animation/AnimatedLetters";

import { newsList } from "../components/NewsAndBlogs/newsData";

function NewsBlogs () {
  return (
    <div className='overflow-hidden bg-navyBlue'>
      <Navbar/>
      <div className='bg-darkBlue px-10 lg:px-44 py-16 md:py-28'>
        <h1 className='text-4xl md:text-5xl text-left mt-8 mb-12 md:mb-16 font-medium'>
          <AnimatedLetters text={"News & Blogs"} />
        </h1>
        <div className="mb-10">
        {newsList.map((item, index) => (
          <NewAndBlogsView item={item} key={index} index={index} />
        ))}
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsBlogs;
