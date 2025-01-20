import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"; // For close icon

const headerbg = new URL("../../assets/video-bg.jpg", import.meta.url).href;
const logo = new URL("../../assets/logo.png", import.meta.url).href;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url(${headerbg})`,
        backgroundPosition: "center top",
      }}
    >
      <div className="flex flex-row justify-between items-center ml-2 py-1">
        <img src={logo} className="w-[112px] h-[83px] p-2" alt="Logo" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex text-white font-montserrat font-[400] text-lg gap-8 mr-10">
          {[
            { label: "HOME", href: "#" },
            { label: "ABOUT", href: "#about" },
            { label: "PORTFOLIO", href: "#portfolio" },
            { label: "BOOKING", href: "#bookings" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${
                activeLink === link.href
                  ? "text-[#D13D1F] border-b border-b-[#D13D1F]"
                  : "text-white"
              } hover:opacity-60`}
              onClick={() => handleSetActiveLink(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="block md:hidden mr-5">
          {!isMenuOpen && <FaBars size={25} onClick={toggleMenu} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center text-white">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={toggleMenu}
          >
            <FaTimes size={25} />
          </button>
          <nav className="flex flex-col gap-8 text-xl font-montserrat font-[400]">
            {[
              { label: "HOME", href: "#" },
              { label: "ABOUT", href: "#about" },
              { label: "PORTFOLIO", href: "#portfolio" },
              { label: "BOOKING", href: "#bookings" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${
                  activeLink === link.href
                    ? "text-[#D13D1F] border-b border-b-[#D13D1F]"
                    : "text-white"
                } hover:opacity-60`}
                onClick={() => handleSetActiveLink(link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
