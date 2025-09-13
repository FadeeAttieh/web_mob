import React from "react";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main>
        <div className="responsive-container">
          <h1 className="heading-main font-bold mb-6">Contact</h1>
          <ContactSection />
        </div>
      </main>
    </>
  );
}