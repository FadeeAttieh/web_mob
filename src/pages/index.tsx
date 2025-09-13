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
          className="min-h-screen w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat sm:px-4 md:px-8 lg:px-16"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        >
          <div className="bg-white bg-opacity-80 p-6 sm:p-8 rounded shadow-lg flex flex-col items-center mx-auto text-center responsive-container max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
            <img src="/hero-fg.jpg" alt="WebMob Hero" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 sm:mb-6 shadow-lg block mx-auto" />
            <h1 className="heading-main font-bold mb-2 sm:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">We Build Websites, Apps & Brands</h1>
            {/* Additional hero content goes here */}
          </div>
        </section>
        <section id="services" className="py-12 sm:py-20 bg-white flex justify-center w-full">
          <div className="responsive-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServicesSection />
          </div>
        </section>
        <section id="portfolio" className="py-12 sm:py-20 bg-gray-50 flex justify-center w-full">
          <div className="responsive-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <PortfolioSection />
          </div>
        </section>
        <section id="about" className="py-12 sm:py-20 bg-white flex justify-center w-full">
          <div className="responsive-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AboutSection />
          </div>
        </section>
        <section id="contact" className="py-12 sm:py-20 bg-gray-50 flex justify-center w-full">
          <div className="responsive-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContactSection />
          </div>
        </section>
        <section id="faq" className="py-12 sm:py-20 bg-white flex justify-center w-full">
          <div className="responsive-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQSection />
          </div>
        </section>
      </main>
    </>
  );
}