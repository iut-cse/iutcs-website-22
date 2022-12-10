import {
  Home,
  ExecutiveCommittee,
  Sponsors,
  Activities,
  Events,
  NewsBlogs,
  News,
  CTF,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/committee" element={<ExecutiveCommittee />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/activity" element={<Activities />} />
      <Route path="/events" element={<Events />} />
      <Route path="/news" element={<News />} />
      <Route path="/blogs" element={<NewsBlogs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/ctf" element={<CTF />} />
    </Routes>
  );
}

export default App;
