import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      className=" text-white h-[100vh]"
      style={{
        background:
          "radial-gradient(circle at 3% 25%, rgba(38, 24, 24, 1) 0%, rgba(38, 24, 24, 1) 2%, rgba(93, 36, 31) 96%) rgba(99, 88, 33) 99%",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
