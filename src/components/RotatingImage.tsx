"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/builder-professional-latin-woman-with-thumb-up-isolated-on-transparent-background-png.webp",
  "/images/download.jpg",
  "/images/electrician-electricity-plumbing-industry-service-honest-hour.jpg",
  "/images/electrician-electricity-stock-photography-advertising-consumer-unit-ladder.jpg",
  "/images/plumber.png",
  "/images/pngtree-painter-worker-png-image_6730929.jpg",
  "/images/pngtree-worker-painting-with-roller-paint-png-image_14615077.png"
];

export default function RotatingImage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[80vh] w-full md:w-1/3 overflow-hidden rounded-none md:rounded-xl shadow-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[index]}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6 }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[index]}
            alt="Fyxit tradesperson"
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
