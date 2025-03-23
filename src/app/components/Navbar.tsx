"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full rounded-2xl bg-white shadow-md z-50 px-6 md:px-10 py-4 flex justify-between items-center">
      <a href="/">
        <Image
          src="/images/logo1.png"
          alt="Logo"
          width={55}
          height={200}
          className="rounded-lg"
        />
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6 text-sm font-medium">
        {["HOME", "ABOUT", "SERVICES", "TEAM", "BOOK"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:underline hover:text-blue-800"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden">
          {["HOME", "ABOUT", "SERVICES", "TEAM", "BOOK"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-gray-700 hover:text-blue-800"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
