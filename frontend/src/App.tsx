import { Home, ExecutiveCommittee, Sponsors, Activities } from "./pages";
import { Route, Routes } from "react-router-dom";
import NewsBlogs from "./pages/NewsBlogs";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/committee" element={<ExecutiveCommittee />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/gallery" element={<Activities />} />
      <Route path="/blogs" element={<NewsBlogs/>} />
    </Routes>
  );
}

export default App;
