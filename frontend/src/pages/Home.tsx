import {
  HeroSection,
  IntroSection,
  GallerySection,
  ContactSection,
  EventsSection,
} from "../components/Home";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <IntroSection />
      <EventsSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
};

export default Home;
