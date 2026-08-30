"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "动画" },
  { href: "/photos", label: "小玉" },
  { href: "/oilPainting", label: "Oil painting" },
  { href: "/pictureBook", label: "Picture book" },
  { href: "/portrait", label: "Portrait" },
  { href: "/photoelectric", label: "Photoelectric" },
  { href: "/waterColor", label: "Water color" },
  { href: "/before2019", label: "Before 2019" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-background">
      <div className="max-w-6xl mx-auto px-14 sm:px-8 h-16 flex items-center justify-center gap-12">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm sm:text-lg transition-colors select-none ${
                isActive
                  ? "text-white font-bold"
                  : "text-gray-700 hover:text-white/90"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}