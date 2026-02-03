import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/Logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();

    if (location.pathname === "/") {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileMenuOpen(false);
      }
    } else {
      navigate(`/${href}`);
    }

    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-40 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white"} border-b border-gray-100`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, "#home")}>
            <img
              src={Logo}
              alt="Little Lemon Logo"
              className=" object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-[#495E57] hover:text-[#F4CE14] font-karla font-medium transition-colors relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4CE14] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-[#495E57] hover:text-[#F4CE14] font-karla font-medium transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4CE14] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, "#menu")}
              className="text-[#495E57] hover:text-[#F4CE14] font-karla font-medium transition-colors relative group"
            >
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4CE14] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#reservations"
              onClick={(e) => handleNavClick(e, "#reservations")}
              className="text-[#495E57] hover:text-[#F4CE14] font-karla font-medium transition-colors relative group"
            >
              Reservations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4CE14] transition-all group-hover:w-full"></span>
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, "#menu")}
              className="bg-[#F4CE14] text-[#495E57] px-6 py-2.5 rounded-full font-karla font-medium hover:bg-[#495E57] hover:text-white transition-all shadow-md hover:shadow-xl"
            >
              Order Online
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#495E57] hover:text-[#F4CE14] focus:outline-none transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 space-y-1 animate-in slide-in-from-top">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="block text-[#495E57] hover:bg-[#F4CE14]/10 font-karla font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="block text-[#495E57] hover:bg-[#F4CE14]/10 font-karla font-medium py-3 px-4 rounded-lg transition-colors"
            >
              About
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, "#menu")}
              className="block text-[#495E57] hover:bg-[#F4CE14]/10 font-karla font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Menu
            </a>
            <a
              href="#reservations"
              onClick={(e) => handleNavClick(e, "#reservations")}
              className="block text-[#495E57] hover:bg-[#F4CE14]/10 font-karla font-medium py-3 px-4 rounded-lg transition-colors"
            >
              Reservations
            </a>
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, "#menu")}
              className="block bg-[#F4CE14] text-[#495E57] font-karla font-medium py-3 px-4 rounded-lg text-center"
            >
              Order Online
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
