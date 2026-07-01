import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import { HOME_TABS, LINKS } from "@/lib/constants";

const GitHubSVG = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* Textured background */}
      <div
        className="min-h-screen flex items-center justify-center p-2 sm:p-4 scrapbook-texture pb-24 md:pb-4"
        style={{ backgroundColor: "#dcdad3" }}
      >
        {/* Notebook container */}
        <div
          className="relative w-full max-w-[1200px] min-h-[85vh] shadow-2xl rounded-xl overflow-hidden lg:overflow-visible"
          style={{ backgroundColor: "#f0eee7" }}
        >
          {/* ── Desktop Right-Edge Notebook Tabs ── */}
          <nav className="hidden lg:flex flex-col absolute -right-[4.5rem] top-12 gap-2 z-30">
            {HOME_TABS.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                className={`${tab.bg} ${tab.text} ${tab.rotate} px-6 py-3 rounded-r-lg hover:translate-x-2 transition-transform shadow-md origin-left`}
                style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: "500" }}
              >
                {tab.label}
              </Link>
            ))}
          </nav>

          {/* ── Mobile Top Navigation Bar ── */}
          <div
            className="md:hidden flex justify-between items-center px-4 py-3 border-b"
            style={{ backgroundColor: "#f6f3ec", borderColor: "#e5e2db" }}
          >
            <span
              className="font-bold text-lg"
              style={{ fontFamily: "var(--font-bricolage)", color: "#695680" }}
            >
              Sabiha Abid
            </span>
            <div className="flex gap-3">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#695680]"
              >
                <GitHubSVG />
              </a>
            </div>
          </div>

          {/* ── Main Paper Page ── */}
          <main
            className="relative w-full p-4 sm:p-8 md:p-16 flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#fcf9f2" }}
          >
            {/* Binder Rings — Desktop Left */}
            <div className="hidden lg:flex flex-col absolute left-4 top-0 bottom-0 justify-around py-12 pointer-events-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 shadow-inner"
                  style={{ backgroundColor: "#ebe8e1", borderColor: "#ccc4ce" }}
                />
              ))}
            </div>

            {/* Top Header Accent Chips */}
            <div className="flex flex-wrap gap-2 justify-center mb-6 mt-2 z-10">
              <div
                className="px-4 py-1 text-white rounded-sm shadow-sm rotate-1"
                style={{
                  backgroundColor: "#4b6546",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                }}
              >
                2023 — PRESENT
              </div>
              <div
                className="px-3 py-1 rounded-sm shadow-sm -rotate-2"
                style={{
                  backgroundColor: "#ffdcc4",
                  color: "#2f1400",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                }}
              >
                Pakistan 📍
              </div>
            </div>

            {/* Avatar Polaroid */}
            <div className="relative mb-8 group">
              {/* Washi tape corner */}
              <div
                className="absolute -top-4 -left-8 w-24 h-8 washi-tape-lavender washi-tape-mask z-20 hidden sm:block"
                style={{ transform: "rotate(-15deg)", mixBlendMode: "multiply" }}
              />
              {/* Polaroid frame */}
              <div className="relative bg-white p-3 sm:p-4 shadow-lg -rotate-2 transition-transform group-hover:rotate-0 duration-300">
                <div
                  className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 overflow-hidden rounded-sm border-b-8"
                  style={{ backgroundColor: "#f0eee7", borderColor: "#e5e2db" }}
                >
                  <div className="w-full h-full relative">
                    <Image src="/coding_workspace.png" alt="Workspace" fill className="object-cover" />
                    <div
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm px-2 py-0.5 rounded-sm text-xs text-center shadow-sm"
                      style={{ fontFamily: "var(--font-mono)", color: "#513f67", whiteSpace: "nowrap" }}
                    >
                      FAST NUCES · CS
                    </div>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span
                    className="italic"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "#4a454d",
                    }}
                  >
                    ✨ CS Student &amp; Builder
                  </span>
                </div>
              </div>
              {/* Floating icons — hidden on smallest screens */}
              <span
                className="material-symbols-outlined absolute -right-8 -bottom-4 text-4xl animate-float hidden sm:block"
                style={{ color: "#695680", "--rot": "10deg" } as React.CSSProperties}
              >
                star
              </span>
              <span
                className="material-symbols-outlined absolute -left-8 top-1/2 text-3xl animate-float hidden sm:block"
                style={{ color: "#8e4e14", "--rot": "-15deg" } as React.CSSProperties}
              >
                favorite
              </span>
            </div>

            {/* Hero Text */}
            <div className="text-center z-10 w-full max-w-2xl px-2 sm:px-4">
              {/* HELLO badge */}
              <div
                className="inline-block px-4 py-1 mb-4 rotate-1"
                style={{
                  backgroundColor: "#e99959",
                  color: "#653200",
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                HELLO, I&apos;M
              </div>

              {/* Name */}
              <h1 className="relative mb-4">
                <span
                  className="block"
                  style={{
                    fontFamily: "var(--font-bricolage)",
                    fontSize: "clamp(40px, 10vw, 72px)",
                    fontWeight: "800",
                    lineHeight: "1.1",
                    letterSpacing: "-0.02em",
                    color: "#1c1c18",
                  }}
                >
                  Sabiha{" "}
                  <span
                    className="inline-block px-3 -rotate-1 rounded-lg"
                    style={{ backgroundColor: "rgba(184,162,209,0.3)" }}
                  >
                    Abid
                  </span>
                </span>
              </h1>

              {/* Tagline */}
              <p
                className="mx-auto mb-8"
                style={{
                  fontFamily: "var(--font-worksans)",
                  fontSize: "clamp(15px, 3.5vw, 18px)",
                  lineHeight: "1.6",
                  color: "#4a454d",
                  maxWidth: "36rem",
                }}
              >
                CS Student at FAST NUCES. Building AI &amp; Full Stack products
                with a sprinkle of{" "}
                <span className="italic font-bold">creative magic</span>.
              </p>

              {/* Status Chips */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {[
                  { icon: "lightbulb",    label: "Problem Solver",    color: "#695680" },
                  { icon: "neurology",    label: "AI Enthusiast",     color: "#4b6546" },
                  { icon: "auto_stories", label: "Lifelong Learner",  color: "#8e4e14" },
                ].map((chip) => (
                  <div
                    key={chip.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm"
                    style={{ backgroundColor: "#f0eee7", borderColor: "#ccc4ce" }}
                  >
                    <span
                      className="material-symbols-outlined text-[16px]"
                      style={{ color: chip.color, fontVariationSettings: "'FILL' 1" }}
                    >
                      {chip.icon}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>
                      {chip.label}
                    </span>
                  </div>
                ))}

                {/* GitHub chip */}
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm hover:scale-105 transition-transform"
                  style={{ backgroundColor: "#f0eee7", borderColor: "#ccc4ce", color: "#1c1c18" }}
                >
                  <span className="material-symbols-outlined text-[16px]" style={{ color: "#695680" }}>
                    code
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>GitHub</span>
                </a>

                {/* LinkedIn chip */}
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-sm hover:scale-105 transition-transform"
                  style={{ backgroundColor: "#f0eee7", borderColor: "#ccc4ce", color: "#1c1c18" }}
                >
                  <span className="material-symbols-outlined text-[16px]" style={{ color: "#4b6546" }}>
                    link
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}>LinkedIn</span>
                </a>
              </div>

              {/* CTA Button */}
              <div className="mt-10 mb-4 group">
                <Link
                  href="/about"
                  className="relative inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-sm shadow-xl hover:shadow-2xl transition-all active:scale-95 overflow-hidden"
                  style={{
                    backgroundColor: "#31312c",
                    color: "#f3f0ea",
                    fontFamily: "var(--font-bricolage)",
                    fontSize: "clamp(18px, 4vw, 24px)",
                    fontWeight: "600",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: "url('https://www.transparenttextures.com/patterns/leather.png')",
                    }}
                  />
                  <span>Open Notebook</span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    menu_book
                  </span>
                  <div
                    className="absolute -right-2 -top-2 px-2 py-1 text-white rotate-12 shadow-md"
                    style={{
                      backgroundColor: "#8e4e14",
                      fontSize: "9px",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    START HERE
                  </div>
                </Link>
              </div>

              {/* Mobile page links */}
              <div className="md:hidden flex flex-wrap justify-center gap-2 mt-6">
                {[
                  { label: "About",      href: "/about",      bg: "#cae8c1",  color: "#4f694a" },
                  { label: "Skills",     href: "/skills",     bg: "#ffdcc4",  color: "#653200" },
                  { label: "Projects",   href: "/projects",   bg: "#b8a2d1",  color: "#49375f" },
                  { label: "Experience", href: "/experience", bg: "#e5e2db",  color: "#4a454d" },
                  { label: "Contact",    href: "/contact",    bg: "#ffdad6",  color: "#93000a" },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 rounded-full text-xs font-bold shadow-sm hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: item.bg,
                      color: item.color,
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Background Decorations — hidden on small screens */}
            <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40">
              {/* KEEP BUILDING ticket */}
              <div
                className="absolute bottom-12 right-4 sm:right-12 p-3 rounded-sm shadow-md flex flex-col items-center"
                style={{
                  backgroundColor: "#6f3800",
                  color: "#ffdcc4",
                  transform: "rotate(-8deg)",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: "700" }}>KEEP</span>
                <span className="material-symbols-outlined text-2xl">construction</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: "700" }}>BUILDING</span>
              </div>

              {/* SVG doodle arrows */}
              <svg
                className="absolute top-[60%] right-[8%] w-24 h-24"
                viewBox="0 0 100 100"
                style={{ color: "rgba(123,117,126,0.3)" }}
              >
                <path d="M10,10 Q50,0 90,90" fill="none" stroke="currentColor" strokeDasharray="4" strokeWidth="2" />
                <path d="M85,80 L90,90 L80,85" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <svg
                className="absolute top-[20%] left-[3%] w-20 h-20"
                viewBox="0 0 100 100"
                style={{ color: "rgba(123,117,126,0.3)" }}
              >
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeDasharray="2 2" strokeWidth="1" />
              </svg>
            </div>
          </main>
        </div>
      </div>

      {/* Footer — desktop only */}
      <footer className="hidden md:flex fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[1200px] justify-between px-8 pointer-events-none z-40">
        <div
          className="px-3 py-1 rounded-sm shadow-sm opacity-70"
          style={{
            backgroundColor: "#f6f3ec",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            transform: "rotate(-1deg)",
          }}
        >
          © 2026 SABIHA ABID
        </div>
        <div
          className="px-3 py-1 rounded-sm shadow-sm opacity-70"
          style={{
            backgroundColor: "#f6f3ec",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            transform: "rotate(1deg)",
          }}
        >
          MADE WITH PASSION 💜
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <MobileNav activePage="home" />
    </>
  );
}
