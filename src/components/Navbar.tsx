import { useEffect, useState } from "react";
import Link from "next/link";

const sections = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function animatedScrollTo(targetY: number, duration = 875) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let start: number | null = null;

  function step(timestamp: number) {
    if (!start) start = timestamp;
    const time = Math.min(1, (timestamp - start) / duration);
    const eased = easeInOutQuad(time);
    window.scrollTo(0, startY + diff * eased);
    if (time < 1) {
      window.requestAnimationFrame(step);
    }
  }
  window.requestAnimationFrame(step);
}

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      let found = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && window.scrollY >= el.offsetTop - 80) {
          found = section.id;
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      animatedScrollTo(el.offsetTop - 60, 875);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/70 backdrop-blur-lg shadow-lg" : "bg-white/40 backdrop-blur-md"
      }`}
      style={{ borderBottom: "1px solid rgba(200,200,255,0.12)" }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-xl text-blue-700 flex items-center gap-2">
          <img src="/logo.jpg" alt="Logo" className="w-8 h-8" />
          WebMob Co.
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="relative px-4 py-2 font-medium text-gray-800 hover:text-blue-600 transition-colors"
              style={{ background: "none", border: "none", outline: "none", cursor: "pointer" }}
            >
              <span>{section.label}</span>
              <span
                className={`absolute left-0 bottom-1 w-full h-0.5 rounded bg-gradient-to-r from-blue-500 to-purple-500 transition-transform duration-300 ${
                  active === section.id ? "scale-x-100" : "scale-x-0"
                }`}
                style={{ transformOrigin: "left" }}
              ></span>
            </button>
          ))}
          <Link href="/careers" className="relative px-4 py-2 font-medium text-gray-800 hover:text-blue-600 transition-colors">
            Careers
          </Link>
          <Link href="/quote" className="relative px-4 py-2 font-medium text-gray-800 hover:text-blue-600 transition-colors">
            Quote
          </Link>
          <Link href="/blog" className="relative px-4 py-2 font-medium text-gray-800 hover:text-blue-600 transition-colors">
            Blog
          </Link>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden p-2 rounded bg-blue-600 text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <rect x="4" y="7" width="16" height="2" rx="1" fill="currentColor" />
            <rect x="4" y="15" width="16" height="2" rx="1" fill="currentColor" />
          </svg>
        </button>
      </div>
      {/* Mobile menu: full-screen, animated */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-lg z-50 flex flex-col items-center justify-center animate-fadein">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-2xl font-semibold mb-6 text-blue-700 hover:text-purple-600 transition-colors"
              style={{ background: "none", border: "none", outline: "none", cursor: "pointer" }}
            >
              {section.label}
            </button>
          ))}
          <Link href="/careers" className="text-2xl font-semibold mb-6 text-blue-700 hover:text-purple-600 transition-colors">
            Careers
          </Link>
          <Link href="/quote" className="text-2xl font-semibold mb-6 text-blue-700 hover:text-purple-600 transition-colors">
            Quote
          </Link>
          <Link href="/blog" className="text-2xl font-semibold mb-6 text-blue-700 hover:text-purple-600 transition-colors">
            Blog
          </Link>
          <button
            className="mt-8 px-6 py-2 rounded bg-blue-600 text-white font-bold text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Close
          </button>
        </div>
      )}
      <style jsx global>{`
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadein {
          animation: fadein 0.3s;
        }
      `}</style>
    </nav>
  );
}