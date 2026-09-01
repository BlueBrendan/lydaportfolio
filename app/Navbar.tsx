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
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 bg-background">
      <div className="max-w-6xl mx-auto px-3 sm:px-8 min-h-20 flex items-center justify-center">
        <div className="grid grid-cols-4 sm:flex sm:items-center sm:justify-center gap-x-4 gap-y-3 sm:gap-5">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`w-17 sm:w-25 text-left text-xs sm:text-base transition-colors select-none text-center ${
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
      </div>
    </nav>
  );
}