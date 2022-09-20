import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer";
import NewAndBlogsView from "../components/NewsAndBlogs/NewAndBlogsView";
import AnimatedLetters from "../animation/AnimatedLetters";

import { newsList } from "../data/newsData";
import Layout from "../components/common/Layout";

function NewsBlogs() {
  return (
    <Layout>
      <div className="px-10 lg:px-44 py-16 md:py-28">
        <h1 className="text-4xl md:text-5xl text-left mt-8 mb-12 md:mb-16 font-medium">
          <AnimatedLetters text={"News & Blogs"} />
        </h1>
        <div className="mb-10">
          {newsList.map((item, index) => (
            <NewAndBlogsView item={item} key={index} index={index + 1} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default NewsBlogs;
