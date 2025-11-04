"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  return (
    <motion.nav
      className={`w-full fixed z-50 h-[8rem] pt-4  transition-all duration-400 ${
        isScrolled ? " backdrop-blur-md  border-gray-200 " : "bg-transparent "
      }`}
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ y: { duration: 0.35, ease: "easeInOut" } }}
    >
      <div className="mx-auto px-12 sm:px-6 lg:px-24 uppercase">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div>
            <Link href="/">
              <Image
                src="/images/FYXiT-logo.png"
                alt="Fyxit Logo"
                width={100}
                height={100}
                className="w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* CTA Button */}
          <div className=" flex  justify-around  bg-red-400 w-[300px] ">
            <motion.button className="text-xl font-semibold ">
              Login
            </motion.button>
            <motion.button
              className="bg-fyx-yellow text-white px-8 py-3 rounded-lg text-xl font-semibold  shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              TEST
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
