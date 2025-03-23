import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full rounded-2xl bg-white shadow-md z-50 px-10 py-4 flex justify-between items-center">
      <a href="/">
        <Image
          src="/images/logo1.png"
          alt="Logo"
          width={55}
          height={200}
          className="rounded-lg"
        />
      </a>
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
    </header>
  );
}
