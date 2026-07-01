import Image from "next/image";
import SidebarNav from "@/components/SidebarNav";
import MobileNav from "@/components/MobileNav";
import { LINKS } from "@/lib/constants";

export const metadata = {
  title: "About | Sabiha Abid – Creative Engineer's Scrapbook",
  description: "About Sabiha Abid — CS student at FAST NUCES, AI & full-stack builder.",
};

export default function AboutPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "#dcdad3" }}
    >
      <SidebarNav activePage="about" />

      {/* Main Notebook Canvas */}
      <main
        className="page-flip-enter relative max-w-[1200px] w-full min-h-[921px] paper-grain shadow-2xl rounded-xl border overflow-hidden flex flex-col md:flex-row lg:ml-[272px]"
        style={{ borderColor: "rgba(204,196,206,0.3)" }}
      >
        {/* Binder Rings */}
        <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col items-center justify-around py-12 pointer-events-none z-10">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 rounded-full border shadow-inner"
              style={{ backgroundColor: "#dcdad3", borderColor: "rgba(123,117,126,0.2)" }}
            />
          ))}
        </div>

        {/* Notebook Content */}
        <div className="flex-1 ml-16 p-8 md:p-12 relative">
          {/* Binder Clip */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
            <div
              className="w-16 h-8 binder-clip-head rounded-t-lg shadow-md"
            />
            <div
              className="w-20 h-4 rounded-full -mt-1"
              style={{ backgroundColor: "rgba(204,196,206,0.5)" }}
            />
          </div>

          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start mb-12 relative pt-4">
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest -rotate-1 mb-4"
                style={{
                  backgroundColor: "#cae8c1",
                  color: "#4f694a",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Core Dossier: Origin
              </span>
              <h1
                className="text-[clamp(40px,6vw,72px)] leading-tight"
                style={{
                  fontFamily: "var(--font-handwriting)",
                  color: "#695680",
                }}
              >
                About Me
              </h1>
            </div>

            {/* Doodle arrow */}
            <div className="hidden md:block absolute right-24 top-12">
              <svg fill="none" height="60" viewBox="0 0 100 60" width="100">
                <path
                  d="M10 50C30 45 50 10 90 20"
                  stroke="#e99959"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
                <path
                  d="M82 12L92 21L80 28"
                  stroke="#e99959"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Polaroid photo */}
            <div
              className="mt-6 md:mt-0 rotate-2 p-2 shadow-lg border border-white relative"
              style={{ backgroundColor: "#ebe8e1" }}
            >
              <div
                className="w-32 h-32 md:w-40 md:h-40 relative"
              >
                <Image src="/coding_workspace.png" alt="Workspace" fill className="object-cover" />
              </div>
              <div className="h-6 w-full flex items-center justify-center">
                <span
                  className="opacity-60"
                  style={{ fontFamily: "var(--font-handwriting)", fontSize: "11px", color: "#4a454d" }}
                >
                  System Ready - 2024
                </span>
              </div>
              {/* Washi tape */}
              <div
                className="absolute -top-3 -left-4 w-12 h-6 washi-tape-lavender"
                style={{ transform: "rotate(-12deg)" }}
              />
            </div>
          </header>

          {/* Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main text — 7 cols */}
            <div className="lg:col-span-7">
              <div className="handwritten-ruled text-[18px] leading-8 space-y-8"
                   style={{ color: "#4a454d", fontFamily: "var(--font-worksans)" }}>
                <p>
                  I am a Computer Science student at FAST NUCES Islamabad, focused on AI,
                  Full Stack Development, and building impactful products. I&apos;m passionate
                  about solving real-world problems through technology and have actively
                  participated in AI hackathons and startup projects. My technical interests
                  include{" "}
                  <span
                    className="px-1 font-semibold"
                    style={{ backgroundColor: "rgba(184,162,209,0.3)" }}
                  >
                    AI Agents
                  </span>
                  ,{" "}
                  <span
                    className="px-1 font-semibold"
                    style={{ backgroundColor: "rgba(202,232,193,0.3)" }}
                  >
                    Human-Centered Design
                  </span>
                  , and{" "}
                  <span
                    className="px-1 font-semibold"
                    style={{ backgroundColor: "rgba(233,153,89,0.2)" }}
                  >
                    building scalable systems
                  </span>
                  .
                </p>
                <p>
                  I believe in engineering solutions that are not only robust but also
                  intuitive. My approach combines analytical rigor with a builder&apos;s
                  mindset, ensuring that every line of code serves a larger purpose in
                  creating value for users.
                </p>
                <div className="pt-8">
                  <span
                    className="text-[24px]"
                    style={{ fontFamily: "var(--font-handwriting)", color: "#695680" }}
                  >
                    — Sabiha Abid
                  </span>
                </div>
              </div>
            </div>

            {/* Right column — 5 cols */}
            <div className="lg:col-span-5 space-y-12">
              {/* READY TO SHIP sticker */}
              <div className="relative group cursor-pointer w-fit mx-auto lg:ml-auto">
                <div
                  className="px-6 py-4 rounded-full font-bold text-lg shadow-xl -rotate-6 transition-transform group-hover:scale-110 flex items-center gap-3"
                  style={{ backgroundColor: "#e99959", color: "#653200" }}
                >
                  READY TO SHIP
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <div className="absolute -bottom-2 -right-2 opacity-40">
                  <span className="material-symbols-outlined text-4xl" style={{ color: "#695680" }}>
                    terminal
                  </span>
                </div>
              </div>

              {/* Sticky Note: Technical Focus */}
              <div
                className="p-6 shadow-[5px_5px_15px_-5px_rgba(0,0,0,0.2)] rotate-2 border-b-4 border-r-4 relative overflow-hidden"
                style={{ backgroundColor: "#fef3c7", borderColor: "#fef08a" }}
              >
                <h3
                  className="text-[24px] mb-2"
                  style={{ fontFamily: "var(--font-handwriting)", color: "#1c1c18" }}
                >
                  Technical Focus
                </h3>
                <ul
                  className="space-y-2 list-disc ml-4 text-[16px]"
                  style={{ color: "#4a454d", fontFamily: "var(--font-worksans)" }}
                >
                  <li>Optimizing Multi-agent AI Systems</li>
                  <li>Advanced Backend Architectures</li>
                  <li>Scaling Full-stack Applications</li>
                </ul>
                {/* Peel corner */}
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 bg-black/5"
                  style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                />
              </div>

              {/* Polaroid — THE ENGINE ROOM */}
              <div
                className="relative bg-[#f0eee7] p-3 shadow-md border border-white w-48 mx-auto lg:mr-4"
                style={{ transform: "rotate(-3deg)" }}
              >
                <div
                  className="w-full aspect-square relative"
                >
                  <Image src="/engine_room.png" alt="Engine Room" fill className="object-cover" />
                </div>
                <div
                  className="mt-2 text-center text-xs"
                  style={{ fontFamily: "var(--font-mono)", color: "#4a454d" }}
                >
                  THE ENGINE ROOM
                </div>
                {/* Sage washi tape */}
                <div
                  className="absolute -top-2 -right-6 w-14 h-5 washi-tape-sage"
                  style={{ transform: "rotate(12deg)" }}
                />
              </div>

              {/* Social links */}
              <div className="pt-4 text-center lg:text-right flex flex-col items-center lg:items-end gap-2">
                <div className="flex gap-4">
                  <a
                    href={LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#695680] transition-colors"
                    style={{ color: "rgba(74,69,77,0.6)" }}
                  >
                    <span className="material-symbols-outlined text-4xl">code</span>
                  </a>
                  <a
                    href={LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#695680] transition-colors"
                    style={{ color: "rgba(74,69,77,0.6)" }}
                  >
                    <span className="material-symbols-outlined text-4xl">hub</span>
                  </a>
                </div>
                <p
                  className="italic"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
                >
                  Building since 2021
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Vertical Notebook Tabs */}
        <div
          className="md:w-12 lg:w-16 flex flex-col pt-24 gap-2"
          style={{ backgroundColor: "rgba(229,226,219,0.2)" }}
        >
          {[
            { label: "HOME",       bg: "#b8a2d1", text: "#49375f", href: "/" },
            { label: "ABOUT",      bg: "#e99959", text: "#653200", href: "/about",      active: true },
            { label: "SKILLS",     bg: "#ebe8e1", text: "#4a454d", href: "/skills" },
            { label: "PROJECTS",   bg: "#ebe8e1", text: "#4a454d", href: "/projects" },
            { label: "EXPERIENCE", bg: "#ebe8e1", text: "#4a454d", href: "/experience" },
            { label: "CONTACT",    bg: "#ffdad6", text: "#93000a", href: "/contact" },
          ].map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className={`notebook-tab py-6 w-full font-bold hover:opacity-90 transition-colors text-xs ${tab.active ? "shadow-md" : ""}`}
              style={{
                backgroundColor: tab.bg,
                color: tab.text,
                fontFamily: "var(--font-mono)",
                writingMode: "vertical-lr",
                transform: "rotate(180deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: tab.active ? "-4px" : "-2px",
              }}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="fixed bottom-0 left-0 w-full flex justify-center py-6 px-4 pointer-events-none z-10"
      >
        <div
          className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-sm pointer-events-auto flex gap-4"
        >
          <span
            className="opacity-70"
            style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
          >
            © 2026 Sabiha Abid.
          </span>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:text-[#695680] transition-opacity italic"
            style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
          >
            GitHub
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:text-[#695680] transition-opacity italic"
            style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
          >
            LinkedIn
          </a>
        </div>
      </footer>

      <MobileNav activePage="about" />
    </div>
  );
}
