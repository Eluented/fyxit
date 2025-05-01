import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function Counter({ value, prefix = "", suffix = "", decimals = 0 }: CounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => {
    return latest.toFixed(decimals);
  });

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    
    return controls.stop;
  }, [value]);

  return (
    <motion.span className="inline-block">
      {prefix}
      <motion.span className="inline-block min-w-[1ch]">
        {rounded}
      </motion.span>
      {suffix}
    </motion.span>
  );
}