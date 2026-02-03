import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "../Navigation";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "../Footer";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}
