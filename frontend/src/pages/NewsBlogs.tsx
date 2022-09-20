import Footer from "../components/common/Footer";
import NewAndBlogsView from "../components/NewsAndBlogs/NewAndBlogsView";

interface newsProps {
  title: string,
  text: string,
  imageUrl: string
}

function NewsBlogs({title, text, imageUrl} : newsProps) {
  return (
    <div className="overflow-hidden bg-navyBlue">
          <NewAndBlogsView title={title} text={text} imageUrl={imageUrl} />
          <Footer/>
    </div>
  )
}

export default NewsBlogs;
