import Image from "next/image";
import SidebarNav from "@/components/SidebarNav";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title: "Skills | Sabiha Abid – Creative Engineer's Scrapbook",
  description: "Skills and tools of Sabiha Abid — frontend, backend, AI/ML, and workflow essentials.",
};

const FRONTEND_SKILLS = [
  { name: "React",       bg: "bg-white border-2 border-[#695680] rounded-full",  rotate: "rotate-3",  emoji: "⚛️" },
  { name: "Next.js",     bg: "bg-[#1c1c18] text-white rounded-xl",                rotate: "-rotate-2", emoji: "▲" },
  { name: "TypeScript",  bg: "bg-[#cae8c1] rounded-lg",                           rotate: "rotate-1",  emoji: "🟦" },
  { name: "Tailwind",    bg: "bg-[#b8a2d1] rounded-full border-dashed border-2 border-[#49375f]", rotate: "-rotate-3", emoji: "🌊" },
  { name: "UI Design",   bg: "bg-[#ffdcc4] rounded-xl",                           rotate: "rotate-6",  emoji: "🎨" },
];

const BACKEND_SKILLS = [
  "Node.js / Express",
  "Python (Django/Flask)",
  "PostgreSQL / MongoDB",
  "GraphQL / REST APIs",
  "Firebase / AWS",
];

const AI_SKILLS = [
  { label: "LLMs",     sub: "LangChain / OpenAI" },
  { label: "NLP",      sub: "SpaCy / HuggingFace" },
  { label: "Data Sci", sub: "Pandas / NumPy" },
  { label: "PyTorch",  sub: "Deep Learning" },
];

const TOOL_CARDS = [
  { name: "Git",      emoji: "🐙", bg: "bg-black", iconBg: "bg-black",        rotate: "-rotate-[4deg]" },
  { name: "Docker",   emoji: "🐳", bg: "bg-white",  iconBg: "bg-blue-100",    rotate: "rotate-[2deg]" },
  { name: "Figma",    emoji: "🎨", bg: "bg-white",  iconBg: "bg-purple-100",  rotate: "-rotate-[1deg]" },
  { name: "Terminal", emoji: "⌨️", bg: "bg-white",  iconBg: "bg-orange-100",  rotate: "rotate-[3deg]" },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#dcdad3" }}>
      <SidebarNav activePage="skills" />

      {/* Main Journal Page */}
      <main
        className="notebook-canvas max-w-[1200px] mx-auto shadow-md rounded-xl min-h-screen relative overflow-hidden flex flex-col lg:ml-[272px]"
      >
        {/* Sticky top header */}
        <header
          className="flex justify-between items-center w-full py-4 px-6 sticky top-0 z-50 shadow-sm"
          style={{ backgroundColor: "#f0eee7" }}
        >
          <div
            className="text-[24px] font-bold"
            style={{ fontFamily: "var(--font-bricolage)", color: "#1c1c18" }}
          >
            Skills Inventory
          </div>
          <div className="flex items-center gap-4">
            <div className="dymo-label -rotate-1 hidden md:block">
              COLLECTIBLE_BADGES
            </div>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center border-2"
              style={{ backgroundColor: "#cdebc4", borderColor: "#1c1c18" }}
            >
              <span className="material-symbols-outlined" style={{ color: "#1c1c18" }}>
                person
              </span>
            </div>
          </div>
        </header>

        {/* Hero Intro Section */}
        <section className="p-8 relative">
          {/* Washi tape LEVEL UP */}
          <div
            className="absolute top-4 right-12 washi-tape-orange px-6 py-1 z-10 text-sm"
            style={{
              transform: "rotate(-3deg)",
              fontFamily: "var(--font-mono)",
              color: "#653200",
            }}
          >
            LEVEL UP
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Polaroid with binder clip */}
            <div className="relative">
              <div
                className="bg-white p-2 shadow-md border w-48 relative"
                style={{ transform: "rotate(-2deg)", borderColor: "#e5e2db" }}
              >
                <div
                  className="w-full h-48 relative"
                >
                  <Image src="/coding_workspace.png" alt="Workspace" fill className="object-cover" />
                </div>
                <p
                  className="text-center pt-2"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}
                >
                  Building Dreams
                </p>
              </div>
              {/* Binder clip */}
              <div className="absolute -bottom-4 -left-4 rotate-12">
                <div className="relative w-10 h-10 rounded" style={{ backgroundColor: "#4a454d" }}>
                  <div
                    className="absolute -top-2.5 left-1 w-7 h-5 border-[3px] rounded-t-[20px]"
                    style={{ borderColor: "#ccc4ce", borderBottom: "none" }}
                  />
                </div>
              </div>
            </div>

            {/* Intro text */}
            <div className="flex-1">
              <h2
                className="text-[clamp(36px,5vw,60px)] mb-6"
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontWeight: "800",
                  color: "#1c1c18",
                }}
              >
                My Tools
              </h2>
              <p
                className="max-w-xl text-[18px]"
                style={{ fontFamily: "var(--font-worksans)", color: "#4a454d", lineHeight: "1.6" }}
              >
                A curated collection of technologies and methodologies I&apos;ve picked up
                along my journey. Every badge represents a challenge conquered.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["#fullstack", "#ai-enthusiast", "#ui-designer"].map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-[13px] ${
                      i === 0 ? "-rotate-1" : i === 1 ? "rotate-2" : "-rotate-2"
                    }`}
                    style={{
                      fontFamily: "var(--font-mono)",
                      backgroundColor: i === 0 ? "#b8a2d1" : i === 1 ? "#cae8c1" : "#ffdcc4",
                      color: i === 0 ? "#49375f" : i === 1 ? "#4f694a" : "#6f3800",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="p-8 grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow">
          {/* Frontend — 8 cols */}
          <div
            className="md:col-span-8 p-6 rounded-xl relative border"
            style={{
              backgroundColor: "#f6f3ec",
              borderColor: "#e5e2db",
              transform: "rotate(0.5deg)",
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3
                className="text-[24px] font-semibold"
                style={{ fontFamily: "var(--font-bricolage)", color: "#4b6546" }}
              >
                Front of the Pack
              </h3>
            </div>
            <div className="flex flex-wrap gap-6">
              {FRONTEND_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className={`sticker-wobble flex flex-col items-center p-4 shadow-sm transition-transform cursor-pointer ${skill.bg} ${skill.rotate}`}
                >
                  <span className="text-3xl mb-1">{skill.emoji}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            {/* PIXEL PERFECT washi tape */}
            <div
              className="absolute -bottom-2 -right-4 px-4 py-0.5 rotate-6 text-white text-xs"
              style={{ backgroundColor: "#4b6546", fontFamily: "var(--font-mono)" }}
            >
              PIXEL PERFECT
            </div>
          </div>

          {/* Backend — 4 cols */}
          <div
            className="md:col-span-4 p-6 rounded-lg shadow-md relative overflow-hidden border-l-8"
            style={{
              backgroundColor: "#fff9c4",
              borderLeftColor: "#facc15",
              transform: "rotate(-1.5deg)",
            }}
          >
            <div className="absolute top-2 right-2 opacity-10">
              <span className="material-symbols-outlined text-6xl">database</span>
            </div>
            <h3
              className="text-[24px] font-semibold mb-4"
              style={{ fontFamily: "var(--font-bricolage)", color: "#1c1c18" }}
            >
              Behind the Scenes
            </h3>
            <ul className="space-y-3">
              {BACKEND_SKILLS.map((skill) => (
                <li
                  key={skill}
                  className="ruled-line pb-1 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm" style={{ color: "#4b6546" }}>
                    check_circle
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & ML — 5 cols */}
          <div
            className="md:col-span-5 p-8 rounded-xl shadow-inner border-2 flex flex-col justify-between"
            style={{
              backgroundColor: "#e5e2db",
              borderColor: "rgba(105,86,128,0.2)",
              transform: "rotate(-0.5deg)",
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#695680" }}
                >
                  <span className="material-symbols-outlined text-white">neurology</span>
                </div>
                <h3
                  className="text-[24px] font-semibold"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  AI Intelligence
                </h3>
              </div>
              <p
                className="opacity-80 mb-6 italic text-[16px]"
                style={{ fontFamily: "var(--font-worksans)" }}
              >
                Training models and building smart agents is where I spend my late nights.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {AI_SKILLS.map((s) => (
                <div
                  key={s.label}
                  className="bg-white p-3 rounded-xl shadow-sm text-center hover:scale-95 transition-transform cursor-pointer border"
                  style={{ borderColor: "rgba(105,86,128,0.1)" }}
                >
                  <div
                    className="font-bold"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#695680" }}
                  >
                    {s.label}
                  </div>
                  <div className="text-[10px] opacity-60" style={{ fontFamily: "var(--font-worksans)" }}>
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools — 7 cols */}
          <div
            className="md:col-span-7 p-6 rounded-xl relative"
            style={{ backgroundColor: "#f0eee7" }}
          >
            <h3
              className="text-[24px] font-semibold mb-6"
              style={{ fontFamily: "var(--font-bricolage)" }}
            >
              Workflow Essentials
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              {TOOL_CARDS.map((tool) => (
                <div
                  key={tool.name}
                  className={`bg-white w-32 h-40 shadow-sm border flex flex-col items-center justify-center hover:z-10 hover:scale-110 transition-all cursor-pointer relative ${tool.rotate}`}
                  style={{ borderColor: "#e5e2db" }}
                >
                  <div className={`${tool.iconBg} p-2 rounded-full mb-2`}>
                    <span className="text-2xl">{tool.emoji}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Doodle annotation */}
            <div className="absolute bottom-4 right-8">
              <span
                className="material-symbols-outlined text-5xl rotate-45"
                style={{ color: "#695680" }}
              >
                subdirectory_arrow_right
              </span>
              <p
                className="-rotate-12 text-[10px]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Can&apos;t live without these!
              </p>
            </div>
          </div>
        </section>

        {/* Fun Section */}
        <section
          className="p-8 border-t-2 border-dashed"
          style={{ borderColor: "rgba(229,226,219,0.5)" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                style={{ backgroundColor: "#4b6546" }}
              >
                <span className="material-symbols-outlined text-white text-3xl">verified</span>
              </div>
              <div>
                <h4
                  className="text-[24px] font-semibold"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  Learning Daily
                </h4>
                <p
                  className="opacity-60 text-[13px]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Next Up: Three.js &amp; WebGL Shaders
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="p-4 rounded-xl rotate-3 shadow-sm hover:rotate-0 transition-transform cursor-help"
                style={{ backgroundColor: "#e99959" }}
              >
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#653200" }}>
                  Coffee Consumed: ∞
                </p>
              </div>
              <div
                className="p-4 rounded-xl -rotate-2 shadow-sm hover:rotate-0 transition-transform cursor-help"
                style={{ backgroundColor: "#b8a2d1" }}
              >
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#49375f" }}>
                  Bugs Squashed: 12,482
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="flex flex-col md:flex-row justify-center items-center w-full py-8 px-2 text-center gap-2 mt-auto border-t"
          style={{ borderColor: "rgba(229,226,219,0.3)" }}
        >
          <p
            className="italic opacity-70"
            style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
          >
            © 2026 Sabiha Abid. All rights reserved.
          </p>
        </footer>

        {/* Binding holes — left */}
        <div className="hidden lg:block absolute left-4 top-0 h-full w-4 pointer-events-none opacity-20">
          <div className="flex flex-col h-full justify-around py-12">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: "#1c1c18" }}
              />
            ))}
          </div>
        </div>
      </main>

      <MobileNav activePage="skills" />
    </div>
  );
}
