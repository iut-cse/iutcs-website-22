import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer";
import GalleryView from "../components/Gallery/GalleryView";

function Gallery() {
  return (
    <div className="overflow-hidden bg-navyBlue">
      <Navbar />
      <GalleryView />
      <Footer />
    </div>
  );
}

export default Gallery;
