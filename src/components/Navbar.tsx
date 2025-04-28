import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full fixed h-[8rem] z-50 pt-4 border-b border-gray-20 font-sans">
      <div className=" mx-auto px-12 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center ">
          {/* Logo on the left */}
          <div className="">
            <Link href="/">
              <Image
                src="/images/FYXiT-logo.png"
                alt="Fyxit Logo"
                width={90}
                height={90}
                className=" w-auto"
              />
            </Link>
          </div>

          {/* Navigation links on the right */}
          <div className="flex gap-16 items-center text-xl">
            <Link
              href="/about"
              className="hover:text-fyx-yellow transition-colors duration-200 ease-in"
            >
              About
            </Link>
            <Link
              href="/contact"
              className=" hover:text-fyx-yellow transition-colors duration-200 ease-in"
            >
              Our Mission
            </Link>

            <Link
              href="/contact"
              className=" hover:text-fyx-yellow transition-colors duration-200 ease-in"
            >
              The Team
            </Link>

            <Link
              href="/contact"
              className=" hover:text-fyx-yellow transition-colors duration-200 ease-in"
            >
              Contact
            </Link>
          </div>

          <button className="bg-fyx-yellow text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all">
            Help Us
          </button>
        </div>
      </div>
    </nav>
  );
}
