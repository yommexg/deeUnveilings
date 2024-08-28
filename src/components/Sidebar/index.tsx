import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { scrollToTop } from "../../utils/scrollToTop";
import { MdCancel } from "react-icons/md";

const Sidebar: React.FC = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuSlideIn = {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  };

  const menuSlideOut = {
    opacity: 0,
    x: 100,
    transition: { duration: 0.3 },
  };

  return (
    <>
      <div onClick={toggleMenu} className="md:hidden z-50 cursor-pointer px-2">
        <FaBars size={22} onClick={toggleMenu} />
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 md:hidden w-full h-full bg-black opacity-80 z-50"></div>
      )}

      <motion.nav
        initial={isMenuOpen ? menuSlideIn : menuSlideOut}
        animate={isMenuOpen ? menuSlideIn : menuSlideOut}
        variants={{ open: menuSlideIn, closed: menuSlideOut }}
        className={`fixed bg-[#1A1A1A] font-bold top-0 z-50 right-0 items-center p-10  md:hidden flex flex-col gap-5 rounded-lg`}
      >
        <MdCancel
          onClick={toggleMenu}
          className="cursor-pointer absolute top-3 right-2 bg-white rounded-full text-black"
          size={20}
        />

        <Link
          to="/"
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
          className={
            location.pathname === "/"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Home
        </Link>

        <Link
          to="/services"
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
          className={
            location.pathname === "/services"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Services
        </Link>

        <Link
          to="/gallery"
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
          className={
            location.pathname === "/gallery"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Gallery
        </Link>

        <Link
          to="/contact"
          onClick={() => {
            toggleMenu();
            scrollToTop();
          }}
          className={
            location.pathname === "/contact"
              ? "text-blue-700 underline"
              : "hover:text-blue-500 hover:opacity-60"
          }
        >
          Contact
        </Link>

        {/* <button className="bg-white text-orange-400 px-4 pb-2 pt-1 rounded-md mt-5">
          Login
        </button> */}
      </motion.nav>
    </>
  );
};

export default Sidebar;
