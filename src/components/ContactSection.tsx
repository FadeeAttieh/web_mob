import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="container mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <label className="block mb-2 font-semibold">Name</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="Your Name" required />
        <label className="block mb-2 font-semibold">Email</label>
        <input type="email" className="w-full mb-4 p-2 border rounded" placeholder="Your Email" required />
        <label className="block mb-2 font-semibold">Message</label>
        <textarea className="w-full mb-4 p-2 border rounded" placeholder="How can we help you?" required />
        <button type="submit" className="btn bg-blue-600 text-white w-full">Send Message</button>
      </form>
      <div className="mt-8 flex flex-col md:flex-row gap-8 items-center">
        <div>
          <h3 className="font-semibold mb-2">Our Location</h3>
          <p>123 Innovation Drive, Tech City</p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Social</h3>
          <a href="#" className="text-blue-600 mr-2">Twitter</a>
          <a href="#" className="text-blue-600 mr-2">LinkedIn</a>
          <a href="#" className="text-blue-600">Instagram</a>
        </div>
      </div>
    </motion.div>
  );
}