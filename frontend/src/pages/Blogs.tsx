import AnimatedLetters from "../animation/AnimatedLetters";
import NewAndBlogsView from "../components/NewsAndBlogs/NewAndBlogsView";
import { blogList } from "../data/BlogContents";

function NewsBlogs() {
  return (
      <div className="lg:px-40 md:px-20 px-10 my-12">
        <h1 className="text-[28px] md:text-4xl text-center mb-12 md:mb-12 font-medium">
          <AnimatedLetters text={"Blogs"} />
        </h1>
        <div className="mb-10">
          {blogList.map((item, index) => (
            <NewAndBlogsView item={item} key={index} index={index + 1} />
          ))}
        </div>
      </div>
  );
}

export default NewsBlogs;
