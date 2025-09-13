import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What technologies do you use?",
    a: "We use React, Next.js, Tailwind CSS, Flutter, and more modern stacks.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most projects take 4-8 weeks depending on complexity.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes, we offer ongoing support and maintenance packages.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="container mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border rounded">
            <button
              className="w-full text-left px-4 py-3 font-semibold"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              {faq.q}
            </button>
            {open === idx && (
              <div className="px-4 pb-3 text-gray-700">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}