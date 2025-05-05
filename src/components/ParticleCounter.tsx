import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export function ParticleCounter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [explode, setExplode] = useState(false);
  const particles = Array.from({ length: 20 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // ms
    const startTime = performance.now();

    const animateValue = (timestamp: number) => {
      const runtime = timestamp - startTime;
      const progress = Math.min(runtime / duration, 1);
      setDisplayValue(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animateValue);
      } else {
        setExplode(true); // Trigger particle explosion
        setTimeout(() => setExplode(false), 1000); // Reset explosion after 1s
      }
    };

    requestAnimationFrame(animateValue);
  }, [value]);

  return (
    <div className="relative inline-block font-heading" ref={containerRef}>
      <span className="text-6xl font-bold text-fyx-yellow">
        {displayValue.toLocaleString()}
      </span>

      {/* Particles */}
      {explode &&
        particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-fyx-yellow"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: 0,
            }}
            transition={{
              duration: 1,
              ease: "circOut",
            }}
          />
        ))}
    </div>
  );
}
