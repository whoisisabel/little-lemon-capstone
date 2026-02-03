import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import svgPaths from "./imports/svg-521vemiexp";
import Logo from "./assets/Logo.svg";
import "./App.css";

function PageLoader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#495E57] to-[#3d4f49] z-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-[#F4CE14] rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 border-4 border-[#F4CE14] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <div className="space-y-2">
          <h2 className="font-markazi text-5xl text-[#F4CE14]">Little Lemon</h2>
          <p className="font-karla text-white text-sm tracking-wider">
            Loading deliciousness...
          </p>
        </div>
      </div>
    </div>
  );
}

function DeliveryIcon() {
  return (
    <svg width="17" height="11" viewBox="0 0 16.672 10.536" fill="none">
      <g>
        <path d={svgPaths.p3279edf0} fill="currentColor" />
        <path d={svgPaths.p34e1b800} fill="currentColor" />
        <path d={svgPaths.pb742d80} fill="currentColor" />
      </g>
    </svg>
  );
}

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

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

function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-[#495E57] to-[#3d4f49] py-20 lg:py-24 mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-slide-in-left">
            <div>
              <h1 className="font-markazi text-6xl lg:text-7xl text-[#F4CE14] mb-0">
                Little Lemon
              </h1>
              <p className="font-markazi text-4xl leading-[0.5] text-white/90">Chicago</p>
            </div>
            <p className="font-karla text-lg text-white/80 max-w-md leading-relaxed">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className="bg-[#F4CE14] text-[#495E57] px-8 py-4 rounded-full font-karla text-lg hover:bg-white hover:scale-105 transition-all shadow-xl hover:shadow-2xl font-medium">
              Reserve a Table
            </button>
          </div>
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="w-full max-w-[400px] h-[400px] rounded-2xl shadow-2xl relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1684568519320-8c6b14f7e65f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBsYXRpbmd8ZW58MXx8fHwxNzY5NzY2MjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Restaurant dish"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuCard({ title, price, description, image, delay }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-markazi font-medium text-3xl text-[#495E57]">
            {title}
          </h3>
          <span className="font-karla font-bold text-[#EE9972] text-lg">
            {price}
          </span>
        </div>
        <p className="font-karla text-[#495e57]/80 text-base leading-relaxed">
          {description}
        </p>
        <button className="inline-flex items-center gap-2 font-karla font-medium text-[#495E57] hover:text-[#F4CE14] transition-colors group/btn">
          Order a delivery
          <span className="group-hover/btn:translate-x-1 transition-transform">
            <DeliveryIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

function Specials() {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4">
          <h2 className="font-markazi text-5xl text-[#495E57]">
            This week's specials!
          </h2>
          <button className="bg-[#F4CE14] text-[#495E57] px-8 py-4 rounded-full font-karla text-lg font-medium hover:bg-[#495E57] hover:text-white transition-all shadow-lg hover:shadow-xl whitespace-nowrap">
            Online Menu
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MenuCard
            title="Greek Salad"
            price="$12.99"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            image="https://images.unsplash.com/photo-1769481614068-47cfb4d1f125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlayUyMHNhbGFkJTIwZnJlc2glMjB2ZWdldGFibGVzfGVufDF8fHx8MTc2OTY4MTAwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
          <MenuCard
            title="Bruschetta"
            price="$5.99"
            description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            image="https://images.unsplash.com/photo-1761315412580-08dd503b8d89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicnVzY2hldHRhJTIwaXRhbGlhbiUyMGFwcGV0aXplcnxlbnwxfHx8fDE3Njk3Mjk4ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
          <MenuCard
            title="Lemon Dessert"
            price="$5.00"
            description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            image="https://images.unsplash.com/photo-1730672558646-c65c4784dd16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGRlc3NlcnQlMjBjYWtlfGVufDF8fHx8MTc2OTc2NzA1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, rating, review }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`text-xl ${i < rating ? "text-[#F4CE14]" : "text-gray-300"}`}
          >
            ★
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-[#F4CE14] to-[#F4CE14]/60 rounded-full flex items-center justify-center font-karla font-bold text-[#495E57] text-lg">
          {name.charAt(0)}
        </div>
        <p className="font-karla font-bold text-[#495E57]">{name}</p>
      </div>
      <p className="font-karla text-[#495e57]/70 text-sm leading-relaxed italic">
        &quot;{review}&quot;
      </p>
    </div>
  );
}

function Testimonials() {
  return (
    <section
      id="reservations"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-markazi text-5xl text-[#495E57] text-center mb-4">
          Testimonials
        </h2>
        <p className="font-karla text-center text-[#495E57]/70 mb-12 max-w-2xl mx-auto">
          See what our customers are saying about us
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <TestimonialCard
            name="Sarah M."
            rating={5}
            review="Amazing food and wonderful atmosphere! The Greek Salad is to die for."
          />
          <TestimonialCard
            name="John D."
            rating={5}
            review="Best Mediterranean restaurant in Chicago. Highly recommend the Bruschetta!"
          />
          <TestimonialCard
            name="Emily R."
            rating={4}
            review="Great family-owned restaurant with authentic recipes. Will definitely come back!"
          />
          <TestimonialCard
            name="Michael T."
            rating={5}
            review="The Lemon Dessert is incredible. Service is always top-notch!"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h2 className="font-markazi text-6xl lg:text-7xl text-[#495E57]">
                Little Lemon
              </h2>
              <p className="font-markazi text-4xl leading-[0.5] text-[#495E57]/70">Chicago</p>
            </div>
            <div className="font-karla text-lg text-[#495E57]/80 leading-relaxed space-y-4 max-w-lg">
              <p>
                Little Lemon is a charming neighborhood bistro that serves
                simple food and classic cocktails in a lively but casual
                environment. The restaurant features a locally-sourced menu with
                daily specials.
              </p>
              <p>
                Our family recipes have been passed down through generations,
                bringing authentic Mediterranean flavors to the heart of
                Chicago.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] order-1 lg:order-2">
            {/* First image - positioned center-left */}
            <div className="absolute left-20 top-12 w-[276px] h-[338px] rounded-2xl shadow-xl overflow-hidden z-10 hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1758561087076-e647b2e2485a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2OTY4MzkzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Second image - positioned right, slightly higher */}
            <div className="absolute right-0 top-0 w-[272px] h-[338px] rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnQlMjBraXRjaGVufGVufDF8fHx8MTc2OTc0NzcyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Chef cooking"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
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
             <img src={Logo} alt="Little Lemon Logo" className="h-10 object-contain" />
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <Navigation />
          <Hero />
          <Specials />
          <Testimonials />
          <About />
          <Footer />
        </>
      )}
    </div>
  );
}
