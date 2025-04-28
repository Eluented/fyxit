'use client'; // Important for scroll interaction

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Update state when scroll position changes
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50); // Change after 50px scroll
  });

  return (
    <motion.nav
      className="w-full fixed h-[8rem] z-50 pt-4 font-sans"
      initial={{ backgroundColor: 'rgba(0,0,0,0)', borderColor: 'rgba(255,255,255,0.1)' }}
      animate={{
        backgroundColor: isScrolled ? '#F5F5F0' : 'rgba(0,0,0,0)',
        borderColor: isScrolled ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'
      }}
      transition={{
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Custom easing for smooth transition
        backgroundColor: { duration: 0.4 },
        borderColor: { duration: 0.3 }
      }}
    >
      <div className="mx-auto px-12 sm:px-6 lg:px-8">
        <motion.div 
          className="flex justify-between items-center"
          initial={{ opacity: 1 }}
          animate={{
            opacity: isScrolled ? 1 : 1 // Can add fade effects if needed
          }}
        >
          {/* Logo - with color transition */}
          <motion.div
            animate={{
              filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
            }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/">
              <Image
                src="/images/FYXiT-logo.png"
                alt="Fyxit Logo"
                width={90}
                height={90}
                className="w-auto"
              />
            </Link>
          </motion.div>

          {/* Navigation links */}
          <div className="flex gap-16 items-center text-xl">
            <Link
              href="/about"
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-fyx-yellow' : 'text-white hover:text-fyx-yellow'}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-fyx-yellow' : 'text-white hover:text-fyx-yellow'}`}
            >
              Our Mission
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-fyx-yellow' : 'text-white hover:text-fyx-yellow'}`}
            >
              The Team
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-300 ${isScrolled ? 'text-gray-900 hover:text-fyx-yellow' : 'text-white hover:text-fyx-yellow'}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button - maintains style */}
          <button className="bg-fyx-yellow text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all">
            Help Us
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
}