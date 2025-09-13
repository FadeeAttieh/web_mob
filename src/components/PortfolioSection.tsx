import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="container mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Portfolio / Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded shadow hover:scale-105 transition-transform">
          <img src="/project1.jpg" alt="Project 1" className="w-full h-32 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg mb-2">E-Commerce Platform</h3>
          <p>Built with Next.js, Stripe, and Sanity CMS. Increased sales by 40% for our client.</p>
        </div>
        <div className="p-6 bg-white rounded shadow hover:scale-105 transition-transform">
          <img src="/project2.jpg" alt="Project 2" className="w-full h-32 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg mb-2">Brand Identity for Startup</h3>
          <p>Logo, website, and mobile app for a fintech startup. Won a design award in 2025.</p>
        </div>
      </div>
    </motion.div>
  );
}