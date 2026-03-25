import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#top" },
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-6 px-6 md:px-24 transition-all duration-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="#top" className="text-2xl font-black tracking-tighter text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
          ZABIN.
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-xs font-semibold text-zinc-300 hover:text-white transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] uppercase tracking-[0.2em]"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden text-white drop-shadow-md" aria-label="Menu">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
