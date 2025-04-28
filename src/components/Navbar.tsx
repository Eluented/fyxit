import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full fixed h-[8rem] z-10 pt-4 bg-transparent">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8 ">
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
          <div className="flex gap-16 items-center text-2xl">
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
        </div>
      </div>
    </nav>
  );
}
