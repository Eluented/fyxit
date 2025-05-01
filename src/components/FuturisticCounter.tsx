"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export function FuturisticCounter({
  value,
  duration = 2,
}: {
  value: number;
  duration?: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const unsubscribe = rounded.onChange((latest) => {
      setDisplayValue(latest.toString());
    });

    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Custom spring-like easing
    });

    return () => {
      unsubscribe();
      controls.stop();
    };
  }, [value]);

  return (
    <div className="flex space-x-1">
      {displayValue.split("").map((digit, i) => (
        <motion.div
          key={i}
          className="relative h-16 w-8 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center"
          initial={{ rotateX: -180 }}
          animate={{ rotateX: 0 }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <span className="text-white text-4xl font-mono">{digit}</span>
          <motion.div
            className="absolute inset-0 bg-fyx-yellow"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            transition={{
              delay: i * 0.1 + 0.3,
              duration: 0.3,
            }}
          />
        </motion.div>
      ))}
      <span className="text-fyx-yellow text-4xl">+</span>
    </div>
  );
}
