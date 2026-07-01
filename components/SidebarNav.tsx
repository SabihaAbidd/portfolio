"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, LINKS } from "@/lib/constants";

const GitHubSVG = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInSVG = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

interface SidebarNavProps {
  activePage: string;
}

export default function SidebarNav({ activePage }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex flex-col fixed left-0 top-0 h-full z-40 bg-[#f6f3ec] shadow-[4px_0_10px_-5px_rgba(0,0,0,0.15)] w-64 border-l-[64px] border-[#b8a2d1]/20">
      {/* Punch holes */}
      <div className="absolute -left-[52px] top-0 h-full flex flex-col justify-around py-8 items-center">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="punch-hole" />
        ))}
      </div>

      {/* Logo / Name */}
      <div className="px-6 pt-8 pb-4">
        <Link href="/">
          <h2
            className="text-[22px] font-bold leading-tight text-[#695680]"
            style={{ fontFamily: "var(--font-bricolage)" }}
          >
            Sabiha Abid
          </h2>
        </Link>

      </div>

      {/* Nav Links */}
      <div className="flex flex-col flex-1 mt-2">
        {NAV_ITEMS.map((item) => {
          const isActive =
            activePage === item.label.toLowerCase() ||
            pathname === item.href;
          return isActive ? (
            <div
              key={item.label}
              className="bg-[#e99959] text-[#653200] rounded-l-full ml-4 pl-4 py-3 font-bold shadow-sm translate-x-2 -rotate-1 flex items-center gap-3 cursor-default"
            >
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                {item.icon}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>
                {item.label}
              </span>
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#4a454d] py-3 px-6 hover:translate-x-1 transition-transform flex items-center gap-3 group"
            >
              <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">
                {item.icon}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Bottom: Social + Resume */}
      <div className="px-6 pb-8">
        <div className="flex gap-4 justify-center mb-4 border-t border-[#ccc4ce] pt-4">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#695680] hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <GitHubSVG />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#695680] hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <LinkedInSVG />
          </a>
        </div>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-[#695680] text-white py-3 rounded-[6px] shadow-sm hover:scale-105 transition-all active:scale-95"
          style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: "700" }}
        >
          GitHub Profile
        </a>
      </div>
    </nav>
  );
}
