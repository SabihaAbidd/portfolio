"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home",       href: "/",          icon: "home" },
  { label: "About",      href: "/about",      icon: "person" },
  { label: "Skills",     href: "/skills",     icon: "build" },
  { label: "Projects",   href: "/projects",   icon: "work" },
  { label: "Experience", href: "/experience", icon: "history_edu" },
  { label: "Contact",    href: "/contact",    icon: "mail" },
];

interface MobileNavProps {
  activePage: string;
}

export default function MobileNav({ activePage }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex justify-around items-end pb-2 pt-1 shadow-[0_-4px_10px_rgba(0,0,0,0.12)]"
      style={{ backgroundColor: "#f0eee7", borderTop: "1px solid #ccc4ce" }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive =
          activePage === item.label.toLowerCase() || pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center gap-0.5 py-1 px-2 transition-all min-w-0 ${
              isActive ? "text-[#695680]" : "text-[#4a454d] opacity-70"
            }`}
          >
            {isActive ? (
              <div
                className="rounded-full px-3 py-1"
                style={{ backgroundColor: "#b8a2d1" }}
              >
                <span
                  className="material-symbols-outlined text-[18px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
              </div>
            ) : (
              <span className="material-symbols-outlined text-[20px]">
                {item.icon}
              </span>
            )}
            <span
              className="text-[9px] leading-tight truncate max-w-[44px] text-center"
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: isActive ? "700" : "400",
              }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
