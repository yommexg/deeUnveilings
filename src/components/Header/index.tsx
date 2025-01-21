import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const headerbg = new URL("../../assets/video-bg.jpg", import.meta.url).href;
const logo = new URL("../../assets/logo.png", import.meta.url).href;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false);

    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url(${headerbg})`,
        backgroundPosition: "center top",
      }}
    >
      {/* Fixed Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black bg-opacity-100" : "bg-[#BBB1B0]"
        }`}
      >
        <div className="flex flex-row justify-between items-center ml-2 py-3">
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

          {/* Mobile Nav Toggle */}
          <div className="block md:hidden mr-5">
            {!isMenuOpen && <FaBars size={25} onClick={toggleMenu} />}
          </div>
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

      {/* Content Section */}
      <div className="mt-[107px] ml-5 font-montserrat font-[500] text-white max-w-[250px] md:max-w-max py-20">
        <h1 className="text-[45px] md:text-[54px] font-[600]">
          DEE UNVEILING <span className="text-[#D13D1F]">STUDIOS</span>
        </h1>
        <p className="md:max-w-[600px] text-lg mt-5">
          The creative hub for capturing stunning photos and videos, offering
          professional equipment, versatile setups, and expert services to bring
          your vision to life.
        </p>

        <button
          className="mt-8 px-6 py-2 border-2 rounded-lg border-[#D13D1FCC] hover:opacity-60"
          id="contact"
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Header;
