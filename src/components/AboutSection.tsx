import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="container mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <img src="/team.jpg" alt="Our Team" className="w-48 h-48 object-cover rounded-full shadow mb-4 md:mb-0" />
        <div>
          <p>
            WebMob Co. is a team of passionate designers, developers, and strategists. We help businesses grow with modern digital solutions.
          </p>
          <ul className="mt-4 list-disc ml-6">
            <li>Founded in 2020</li>
            <li>20+ team members</li>
            <li>Award-winning projects</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}