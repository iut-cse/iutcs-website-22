import AnimatedLetters from "../animation/AnimatedLetters";
import NewAndBlogsView from "../components/NewsAndBlogs/NewAndBlogsView";
import Layout from "../components/common/Layout";
import { newsList } from "../data/newsContents";

function News() {
  return (
    <Layout>
      <div className="lg:px-40 md:px-20 px-10 my-12">
        <h1 className="text-[28px] md:text-4xl text-center mb-12 md:mb-12 font-medium">
          <AnimatedLetters text={"News"} />
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

export default News;
