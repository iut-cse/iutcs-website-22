import {
  Home,
  ExecutiveCommittee,
  Sponsors,
  Activities,
  Events,
  NewsBlogs,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/committee" element={<ExecutiveCommittee />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/activity" element={<Activities />} />
      <Route path="/events" element={<Events />} />
      <Route path="/blogs" element={<NewsBlogs />} />
    </Routes>
  );
}

export default App;
