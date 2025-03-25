"use client";

import { NavLinks } from "./NavLinks";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <nav
      className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden"
      role="navigation"
      aria-label="Mobile Navigation"
    >
      <NavLinks onClick={onClose} />
    </nav>
  );
}
