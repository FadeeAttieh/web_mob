import React from "react";
import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <>
      <Navbar />
      <main>
        <div className="responsive-container">
          <h1 className="heading-main font-bold mb-6">Blog / Insights</h1>
          <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg">
                  How to Build a Modern Web App in 2025
                </h3>
                <p className="text-gray-700">
                  Discover the latest frameworks, tools, and best practices for
                  scalable web apps.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Branding Trends for Startups</h3>
                <p className="text-gray-700">
                  Learn how to create a memorable brand identity in a competitive
                  market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}