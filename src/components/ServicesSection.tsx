import { motion } from "framer-motion";

export default function ServicesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="container mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-blue-50 rounded shadow hover:scale-105 transition-transform">
          <img src="/websites.jpg" alt="Websites" className="w-full h-32 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg mb-2">Website Development</h3>
          <p>Responsive, SEO-friendly websites using React, Next.js, and Tailwind CSS.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded shadow hover:scale-105 transition-transform">
          <img src="/webapps.jpg" alt="Web Apps" className="w-full h-32 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg mb-2">Web App Solutions</h3>
          <p>Custom web applications for business automation and customer engagement.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded shadow hover:scale-105 transition-transform">
          <img src="/mobile.jpg" alt="Mobile Apps" className="w-full h-32 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg mb-2">Mobile App Development</h3>
          <p>Cross-platform mobile apps built with React Native and Flutter.</p>
        </div>
        <div className="p-6 bg-blue-50 rounded shadow hover:scale-105 transition-transform">
          <img src="/branding.jpg" alt="Branding" className="w-full h-32 object-cover rounded mb-4" />
          <h3 className="font-semibold text-lg mb-2">Branding & Design</h3>
          <p>Logo, identity, and UI/UX design to elevate your brand presence.</p>
        </div>
      </div>
    </motion.div>
  );
}