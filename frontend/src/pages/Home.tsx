import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar/Navbar";
import {
  HeroSection,
  IntroSection,
  GallerySection,
  ContactSection,
  EventsSection,
} from "../components/Home";

const Home = () => {
  return (
    <div className="overflow-hidden bg-navyBlue">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
