import React from "react";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <div className="responsive-container">
          <h1 className="heading-main font-bold mb-6">About Us</h1>
          <AboutSection />
        </div>
      </main>
    </>
  );
}