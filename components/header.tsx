import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={`w-full px-6 py-4 shadow-md poppins bg-white`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-6">
            <Image
              src="/image/CircuitScope.webp"
              alt="CircuitScope Logo"
              width={50}
              height={50}
              />
            <span className={`text-xl font-bold `}>CircuitScope</span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-10 text-lg">
          <Link href="/" className={`text-sm font-medium hover:text-blue-500`}>
            Home
          </Link>
          <Link href="/blog" className={`text-sm font-medium hover:text-blue-500`}>
            Blog
          </Link>
          <Link href="/about" className={`text-sm font-medium hover:text-blue-500`}>
            About
          </Link>
          <Link href="/contact" className={`text-sm font-medium hover:text-blue-500`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
