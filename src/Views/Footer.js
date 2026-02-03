import Logo from "../assets/Logo.svg";

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-[#000000] py-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="Little Lemon Logo"
                className="h-10 object-contain"
              />
            </div>
            <p className="font-karla text-white/70 text-sm">
              Family owned Mediterranean restaurant, serving traditional recipes
              with a modern twist.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-karla font-bold text-lg text-[#F4CE14]">
              Navigation
            </h3>
            <ul className="font-karla text-white/80 space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "#home")}
                  className="hover:text-[#F4CE14] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                  className="hover:text-[#F4CE14] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, "#menu")}
                  className="hover:text-[#F4CE14] transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#reservations"
                  onClick={(e) => handleNavClick(e, "#reservations")}
                  className="hover:text-[#F4CE14] transition-colors"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => handleNavClick(e, "#menu")}
                  className="hover:text-[#F4CE14] transition-colors"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-karla font-bold text-lg text-[#F4CE14]">
              Contact
            </h3>
            <ul className="font-karla text-white/80 space-y-2 text-sm">
              <li>123 Citrus Lane</li>
              <li>Chicago, IL 60601</li>
              <li className="pt-2">(312) 555-LEMON</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-karla font-bold text-lg text-[#F4CE14]">
              Hours
            </h3>
            <ul className="font-karla text-white/80 space-y-2 text-sm">
              <li>Monday - Friday</li>
              <li>11:00 AM - 10:00 PM</li>
              <li className="pt-2">Saturday - Sunday</li>
              <li>10:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="font-karla text-white/60 text-sm">
            © 2026 Little Lemon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}