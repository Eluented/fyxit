import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 fixed">
      <div className="max-w-[1330px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logo.png" // Update with your logo path
                alt="Fyxit Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation links on the right */}
          <div className="flex gap-8 items-center">
            <Link
              href="/about"
              className="text-gray-900 hover:text-fyx-yellow transition-colors"
            >
              About
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-900 hover:text-fyx-yellow transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-fyx-yellow transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
