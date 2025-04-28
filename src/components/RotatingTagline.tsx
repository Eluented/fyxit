"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const taglines = [
  "Need a Builder? Fyxit.",
  "Get Seen. Get Hired.",
  "Show Your Worth.",
];

export default function RotatingTagline() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Function to split the tagline and make last word yellow
  const renderTagline = (tagline: string) => {
    const words = tagline.split(" ");
    const lastWord = words.pop(); // Remove the last word

    return (
      <>
        {words.join(" ")} {/* All words except last */}
        <span className="text-fyx-yellow">{lastWord}</span>
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
          className="text-4xl md:text-8xl font-bold "
        >
          {renderTagline(taglines[index])}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
