"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const taglines = [
  "Need a builder? Fyxit.",
  "Struggling to find a plumber? Fyxit.",
  "DIY fail? Fyxit.",
  "Problem? Fyxit."
];

export default function RotatingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-[96px]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={taglines[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          {taglines[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
