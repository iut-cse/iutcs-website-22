import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar/Navbar";
import {
  HeroSection,
  IntroSection,
  GallerySection,
  ContactSection,
} from "../components/Home";

const Home = () => {
  return (
    <div className="overflow-hidden bg-navyBlue">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
