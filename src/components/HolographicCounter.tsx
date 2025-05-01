import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";

export function HolographicCounter({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "circOut",
    });
    return controls.stop;
  }, [value]);

  return (
    <motion.span className="relative inline-block" whileHover={{ scale: 1.05 }}>
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
