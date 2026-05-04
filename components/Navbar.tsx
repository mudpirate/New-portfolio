import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm w-full">
      <div className="px-5 sm:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="w-9 h-9 rounded-full overflow-hidden border border-white/25 flex-shrink-0">
          <Image
            src="/avatar.jpeg"
            alt="Nomesh"
            width={36}
            height={36}
            className="w-full h-full object-cover object-top"
            priority
          />
        </Link>

        <div className="flex items-center gap-1.5">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-[family-name:var(--font-geist-mono)] text-xs sm:text-sm text-white/65 px-2.5 sm:px-3 py-1 border border-white/30 border-dashed hover:border-white/50 hover:text-white/95 transition-all duration-200 tracking-tight"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-dashed border-white/40" />
    </nav>
  );
};

export default Navbar;
