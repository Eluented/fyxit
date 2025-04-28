"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const taglines = [
  "Need a builder? Fyxit.",
  "Find a plumber? Fyxit.",
  "DIY fail? Fyxit.",
  "Problem? Fyxit.",
];

export default function RotatingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Function to split the tagline and wrap "Fyxit." in a span
  const renderTagline = (tagline: string) => {
    const parts = tagline.split("Fyxit.");
    return (
      <>
        {parts[0]}
        <span className="text-fyx-yellow">Fyxit.</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="relative min-h-[96px]">
      <AnimatePresence mode="wait">
        <motion.h1
          key={taglines[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-8xl font-bold"
        >
          {renderTagline(taglines[index])}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
