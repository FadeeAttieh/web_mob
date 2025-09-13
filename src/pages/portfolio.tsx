import React from "react";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <div className="responsive-container">
          <h1 className="heading-main font-bold mb-6">Portfolio / Case Studies</h1>
          <PortfolioSection />
        </div>
      </main>
    </>
  );
}