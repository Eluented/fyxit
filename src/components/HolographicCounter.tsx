import { animate, useMotionValue, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function HolographicCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "circOut",
      });
      return controls.stop;
    }
  }, [value, isInView]);

  return (
    <motion.span
      ref={ref}
      className="relative inline-block font-sans"
      whileHover={{ scale: 1.05 }}
    >
      <motion.span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fyx-yellow to-cyan-300">
        {rounded}
      </motion.span>
      <motion.span
        className="absolute inset-0 blur-md opacity-70 bg-gradient-to-r from-fyx-yellow to-cyan-300"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.span>
  );
}
