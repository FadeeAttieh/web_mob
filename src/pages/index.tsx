import React from "react";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-blue-300">
        <h1 className="text-4xl font-bold mb-4">We Build Websites, Apps & Brands</h1>
        <p className="text-lg mb-8">Modern solutions for your business.</p>
        <nav className="flex gap-4">
          <a href="#services" className="btn">Services</a>
          <a href="#portfolio" className="btn">Portfolio</a>
          <a href="#about" className="btn">About</a>
          <a href="#contact" className="btn">Contact</a>
          <a href="#faq" className="btn">FAQ</a>
        </nav>
      </section>
      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <ServicesSection />
      </section>
      {/* Portfolio */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <PortfolioSection />
      </section>
      {/* About */}
      <section id="about" className="py-20 bg-white">
        <AboutSection />
      </section>
      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-50">
        <ContactSection />
      </section>
      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <FAQSection />
      </section>
      <style jsx>{`
        .btn {
          padding: 0.5rem 1.5rem;
          background: #2563eb;
          color: #fff;
          border-radius: 0.375rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn:hover {
          background: #1e40af;
        }
      `}</style>
    </main>
  );
}