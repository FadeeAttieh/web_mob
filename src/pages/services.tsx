import React from "react";
import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";

export default function Services() {
  return (
    <>
      <Navbar />
      <main>
        <div className="responsive-container">
          <h1 className="heading-main font-bold mb-6">Our Services</h1>
          <ServicesSection />
        </div>
      </main>
    </>
  );
}