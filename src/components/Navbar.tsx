"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll behavior logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 1000) {
      setHidden(true); // scroll down
    } else {
      setHidden(false); // scroll up
    }

    setIsScrolled(latest > 50); // toggle blurred background
  });

  return (
    <motion.nav
      className={`w-full fixed z-50 h-[8rem] pt-4  transition-all duration-400 ${
        isScrolled
          ? " backdrop-blur-md  border-gray-200 "
          : "bg-transparent "
      }`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ y: { duration: 0.35, ease: "easeInOut" } }}
    >
      <div className="mx-auto px-12 sm:px-6 lg:px-8 uppercase">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            animate={{
              filter: isScrolled ? "none" : "brightness(0) invert(1)",
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
                priority
              />
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex gap-16 items-center font-poppins text-xl font-bold tracking-widest ">
            {[
              { href: "/about", text: "About" },
              { href: "/mission", text: "Our Mission" },
              { href: "/team", text: "The Team" },
              { href: "/contact", text: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300  `}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="bg-fyx-yellow text-white px-8 py-3 rounded-lg text-xl font-semibold  shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Help Us
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
