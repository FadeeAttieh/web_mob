import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.backgroundPosition = `center ${scrollY * 0.5}px`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.navigator.userAgent.includes("Trident")) {
        const minWidth = 375;
        if (window.innerWidth < minWidth) {
          document.body.style.width = `${minWidth}px`;
        } else {
          document.body.style.width = "";
        }
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section
          id="hero"
          ref={heroRef}
          className="min-h-screen flex flex-col justify-center items-center"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center 0px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="bg-white bg-opacity-80 p-8 rounded shadow-lg flex flex-col items-center mx-auto text-center responsive-container">
            <img src="/hero-fg.jpg" alt="WebMob Hero" className="w-32 h-32 rounded-full mb-6 shadow-lg block mx-auto" />
            <h1 className="heading-main font-bold mb-4">We Build Websites, Apps & Brands</h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto">
              Modern solutions for your business. Fast, scalable, and beautiful digital products.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#services" className="btn">Our Services</a>
              <a href="#portfolio" className="btn">Portfolio</a>
              <a href="#about" className="btn">About Us</a>
            </div>
          </div>
        </section>
        <section id="services" className="py-20 bg-white flex justify-center w-full">
          <div className="responsive-container">
            <ServicesSection />
          </div>
        </section>
        <section id="portfolio" className="py-20 bg-gray-50 flex justify-center w-full">
          <div className="responsive-container">
            <PortfolioSection />
          </div>
        </section>
        <section id="about" className="py-20 bg-white flex justify-center w-full">
          <div className="responsive-container">
            <AboutSection />
          </div>
        </section>
        <section id="contact" className="py-20 bg-gray-50 flex justify-center w-full">
          <div className="responsive-container">
            <ContactSection />
          </div>
        </section>
        <section id="faq" className="py-20 bg-white flex justify-center w-full">
          <div className="responsive-container">
            <FAQSection />
          </div>
        </section>
      </main>
    </>
  );
}