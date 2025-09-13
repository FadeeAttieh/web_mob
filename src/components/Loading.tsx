import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    const animate = () => {
      setProgress((prev) => {
        if (prev < 100) {
          frame = requestAnimationFrame(animate);
          return Math.min(prev + Math.random() * 2.5, 100);
        }
        return 100;
      });
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 z-50">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Neon circular progress bar */}
        <svg width="160" height="160" viewBox="0 0 160 160">
          <defs>
            <linearGradient id="neon" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#a78bfa" />
            </linearGradient>
            <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="#222"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r="70"
            stroke="url(#neon)"
            strokeWidth="12"
            fill="none"
            strokeDasharray={2 * Math.PI * 70}
            strokeDashoffset={2 * Math.PI * 70 * (1 - progress / 100)}
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
            filter="url(#glow)"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-blue-400 drop-shadow-lg animate-pulse">
          {Math.floor(progress)}%
        </span>
      </div>
      <div className="mt-8 text-lg font-semibold text-white tracking-wide animate-fadein">
        Loading your experience...
      </div>
      <style jsx>{`
        .animate-fadein {
          animation: fadein 1.2s;
        }
        @keyframes fadein {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}