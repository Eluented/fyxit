"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const sections = [
  {
    title: "Fix It!",
    content:
      "Fyxit is redefining the trades industry by giving professionals a platform to showcase their work, build their brand, and get hired through their portfolio, not just word of mouth.",
    bgImage: "/images/about.jpg",
  },
  {
    title: "Our Mission",
    content:
      "To empower tradespeople by building a trusted, transparent, and growth-oriented community that turns skill into opportunity.",
    bgImage: "/images/our-mission.jpg",
  },
  {
    title: "The Team",
    content:
      "Fyxit is founded by a passionate group of builders, technologists, and designers with real-world experience in the trades and digital strategy.",
    bgImage: "/images/the-team1.jpg",
  },
  {
    title: "How It Works",
    content:
      "Create a profile, showcase your past work, receive reviews, and attract clients looking for trustworthy and talented trades professionals.",
    bgImage: "/images/how-it-works.jpg",
  },
];

export default function FyxitSplitScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const directionRef = useRef(1); // 1 for down, -1 for up
  const sectionRefs = useRef([]);

  // Handle section visibility changes
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(entry.target);
          if (index !== -1 && index !== activeIndex) {
            directionRef.current = index > activeIndex ? 1 : -1;
            setActiveIndex(index);
          }
        }
      });
    }, {
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.1
    });

    // Observe all sections
    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeIndex]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative bg-white">
      {/* Left sticky side panel */}
      <div className="md:w-1/3 sticky top-0 h-screen hidden md:flex items-center justify-center border-r border-gray-200 p-8 z-10 overflow-hidden">
        {/* Background Images Container */}
        <div className="absolute inset-0 -z-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.bgImage}
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                transition: { duration: 0.3 }
              }}
              className="absolute inset-0"
              style={{
                zIndex: activeIndex === index ? 1 : 0,
                display: activeIndex === index || activeIndex === index - 1 || activeIndex === index + 1 ? 'block' : 'none'
              }}
            >
              <Image
                src={section.bgImage}
                alt="section background"
                fill
                className="object-cover"
                priority={index < 2}
              />
            </motion.div>
          ))}
        </div>

        {/* Section Title */}
        <motion.h2
          key={sections[activeIndex].title}
          initial={{ opacity: 0, y: 20 * directionRef.current }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="font-bold text-white text-center z-10 drop-shadow-lg text-7xl uppercase font-sans text-shadow-black text-shadow-md"
        >
          {sections[activeIndex].title}
        </motion.h2>
      </div>

      {/* Right scrollable sections */}
      <div className="flex flex-col w-full md:w-2/3">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={el => sectionRefs.current[index] = el}
            className="h-screen flex items-center justify-center px-4 md:px-8"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={activeIndex === index ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-xl font-poppins "
            >
              <h3 className="text-3xl font-semibold mb-4 text-gray-800 md:hidden font-mono">
                {section.title}
              </h3>
              <p className="text-3xl text-gray-600 leading-relaxed font-semibold tracking-wider">
                {section.content}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}