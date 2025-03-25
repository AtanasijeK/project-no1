"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "lucide-react";
import { NavLinks } from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full rounded-2xl bg-white shadow-md z-50 px-6 md:px-10 py-4 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/images/logo1.png"
          alt="Company Logo"
          width={55}
          height={200}
          priority
          sizes="(max-width: 768px) 40px, 55px"
          className="rounded-lg object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex space-x-6 text-sm font-medium"
        role="navigation"
        aria-label="Main Navigation"
      >
        <NavLinks />
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <XIcon size={30} /> : <MenuIcon size={30} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
    </header>
  );
}
