import { Home, ExecutiveCommittee, Sponsors, Activities } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/committee" element={<ExecutiveCommittee />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/activity" element={<Activities />} />
    </Routes>
  );
}

export default App;
