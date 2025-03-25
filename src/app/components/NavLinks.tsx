export function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      {["HOME", "ABOUT", "SERVICES", "TEAM", "BOOK"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="hover:underline hover:text-blue-800"
          onClick={onClick}
        >
          {item}
        </a>
      ))}
    </>
  );
}
