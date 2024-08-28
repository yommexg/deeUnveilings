import { Link, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import { scrollToTop } from "../../utils/scrollToTop";
import { FaPhone } from "react-icons/fa";

// const logoImg = new URL("../../assets/logo/inksLogo.png", import.meta.url).href;
// const logoName = new URL("../../assets/logo/inksname.png", import.meta.url)
//   .href;

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <header
      className={`shadow-lg fixed top-0 left-0 right-0 py-6 md:px-10 px-4 flex justify-between items-center overflow-hidden md:gap-4 lg:px-20 z-50`}
    >
      <div>
        <h2 className="text-orange-400 font-bold text-xl">
          Dee Unveiling Studios
        </h2>
      </div>

      {/* Mobile View */}
      <Sidebar />

      {/* Desktop View */}
      <div className="hidden md:flex md:gap-10 ">
        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
          onClick={() => scrollToTop()}
        >
          Home
        </Link>
        <Link
          to="/services"
          className={
            location.pathname === "/services"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
          onClick={() => scrollToTop()}
        >
          Services
        </Link>

        <Link
          to="/gallery"
          className={
            location.pathname === "/gallery"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
          onClick={() => scrollToTop()}
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className={
            location.pathname === "/contact"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
          onClick={() => scrollToTop()}
        >
          Contact
        </Link>
      </div>

      <div className="items-center gap-2 hidden lg:flex">
        <FaPhone color="blue" />
        <a href="tel:+2349035065950" className="font-bold">
          +2347059851649
        </a>
        <button className="bg-[#1A1A1A] px-4 pb-2 pt-1 rounded-md ml-5">
          Login
        </button>
      </div>

      <button className="hidden md:block lg:hidden bg-[#1A1A1A] px-4 pb-2 pt-1 rounded-md">
        Login
      </button>
    </header>
  );
};

export default Navbar;
