import React from "react";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <div className="responsive-container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-main font-bold mb-6">Portfolio / Case Studies</h1>
          <PortfolioSection />
        </div>
      </main>
    </>
  );
}