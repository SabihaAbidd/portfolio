import SidebarNav from "@/components/SidebarNav";
import MobileNav from "@/components/MobileNav";
import { PROJECTS, LINKS } from "@/lib/constants";

export const metadata = {
  title: "Projects | Sabiha Abid – Creative Engineer's Scrapbook",
  description: "Projects by Sabiha Abid — HostelWalla, Awaaz-e-GenZ, CrisisLens AI.",
};

const GitHubSVG = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

// Emoji map for projects
const PROJECT_EMOJI: Record<string, string> = {
  hostelwalla: "🏠",
  awaaz:       "📢",
  crisislens:  "🚨",
};

export default function ProjectsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#dcdad3" }}
    >
      <SidebarNav activePage="projects" />

      {/* Main canvas */}
      <main
        className="lg:ml-64 p-6 max-w-[1200px] mx-auto min-h-screen felt-texture shadow-2xl relative overflow-hidden"
        style={{ backgroundColor: "#f0eee7" }}
      >
        {/* Mobile header */}
        <header className="flex lg:hidden justify-between items-center w-full py-4 px-6 sticky top-0 z-50 shadow-sm mb-6 rounded-t-xl"
                style={{ backgroundColor: "#f0eee7" }}>
          <div
            className="text-[22px] font-bold"
            style={{ fontFamily: "var(--font-bricolage)", color: "#1c1c18" }}
          >
            Sabiha Abid
          </div>
          <span className="material-symbols-outlined" style={{ color: "#695680" }}>menu</span>
        </header>

        {/* Page header */}
        <div className="relative pt-12 pb-8 px-2">
          {/* Scribble accent */}
          <div className="absolute top-0 right-10 rotate-12 opacity-40">
            <span className="material-symbols-outlined text-[64px]" style={{ color: "#8e4e14" }}>
              draw
            </span>
          </div>

          <div
            className="inline-block px-6 py-2 rounded-full font-bold mb-6 shadow-sm -rotate-2"
            style={{
              backgroundColor: "#b8a2d1",
              color: "#49375f",
              fontFamily: "var(--font-bricolage)",
              fontSize: "28px",
            }}
          >
            PROJECTS
          </div>
          <p
            className="max-w-xl text-[18px]"
            style={{
              fontFamily: "var(--font-worksans)",
              color: "#4a454d",
              lineHeight: "1.6",
            }}
          >
            A curated collection of my experiments, solutions, and digital crafts.
            Think of it as my technical scrapbook where logic meets creativity.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-2 pb-24">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className={`scrapbook-card relative bg-[#f6f3ec] p-6 rounded-lg shadow-sm ${proj.rotate}`}
            >
              {/* Washi tape */}
              {proj.waspiColor && proj.waspiPos && (
                <div className={`${proj.waspiPos} ${proj.waspiColor} z-10`} />
              )}

              {/* Paper clip / binder clip */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ color: "#7b757e", filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))" }}
                >
                  {proj.clipIcon}
                </span>
              </div>

              {/* Project image / illustration */}
              <div
                className="aspect-square rounded-lg mb-6 overflow-hidden border-4 shadow-inner flex items-center justify-center"
                style={{
                  backgroundColor: "#ebe8e1",
                  borderColor: "#ffffff",
                }}
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center gap-3"
                  style={{
                    backgroundColor:
                      proj.id === "hostelwalla"
                        ? "#cae8c1"
                        : proj.id === "awaaz"
                        ? "#ffdcc4"
                        : "#eedcff",
                  }}
                >
                  <span className="text-6xl">{PROJECT_EMOJI[proj.id]}</span>
                  <span
                    className="font-bold text-sm"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color:
                        proj.id === "hostelwalla"
                          ? "#4f694a"
                          : proj.id === "awaaz"
                          ? "#653200"
                          : "#49375f",
                    }}
                  >
                    {proj.name.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${proj.iconBg}`}
                    >
                      <span
                        className={`material-symbols-outlined ${proj.iconColor}`}
                      >
                        {proj.icon}
                      </span>
                    </div>
                    <h2
                      className="text-[22px] font-semibold"
                      style={{ fontFamily: "var(--font-bricolage)", color: "#1c1c18" }}
                    >
                      {proj.name}
                    </h2>
                  </div>
                  {proj.status && (
                    <span
                      className="inline-block px-2 py-0.5 rounded text-[11px] w-fit mt-1"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "#8e4e14",
                        backgroundColor: "rgba(233,153,89,0.2)",
                      }}
                    >
                      {proj.status}
                    </span>
                  )}
                </div>

                <p
                  className="text-[15px]"
                  style={{
                    fontFamily: "var(--font-worksans)",
                    color: "#4a454d",
                    lineHeight: "1.5",
                  }}
                >
                  {proj.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border text-[12px]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        backgroundColor: "#e5e2db",
                        borderColor: "#ccc4ce",
                        color: "#1c1c18",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View Project */}
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-bold mt-4 hover:underline"
                  style={{ fontFamily: "var(--font-mono)", color: proj.viewColor }}
                >
                  View Project
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          ))}

          {/* Open to Collabs sticky note */}
          <div
            className="scrapbook-card relative p-8 rounded-sm shadow-md -rotate-2 flex flex-col justify-between border-b-4 border-r-4 h-full md:col-span-2 lg:col-span-1"
            style={{
              backgroundColor: "rgba(233,153,89,0.3)",
              borderBottomColor: "#e99959",
              borderRightColor: "#e99959",
            }}
          >
            <div className="absolute top-2 right-2 opacity-20">
              <span className="material-symbols-outlined text-4xl" style={{ color: "#653200" }}>
                lightbulb
              </span>
            </div>
            <div>
              <h3
                className="text-[22px] font-semibold mb-4"
                style={{ fontFamily: "var(--font-bricolage)", color: "#653200" }}
              >
                Open to Collabs!
              </h3>
              <p
                className="text-[15px]"
                style={{ fontFamily: "var(--font-worksans)", color: "#653200", lineHeight: "1.6" }}
              >
                I&apos;m always looking for exciting open-source projects or creative
                partnerships. Reach out if you want to build something together!
              </p>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div className="flex gap-4">
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  style={{ color: "#653200" }}
                >
                  <GitHubSVG />
                </a>
              </div>
              <span className="material-symbols-outlined" style={{ color: "#653200" }}>
                rocket_launch
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="flex flex-col md:flex-row justify-center items-center w-full py-8 px-2 text-center gap-4 relative"
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 border-t border-dashed"
            style={{ borderColor: "#ccc4ce" }}
          />
          <div
            className="italic opacity-70"
            style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
          >
            © 2026 Sabiha Abid. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:text-[#695680] transition-all"
              style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
            >
              GitHub
            </a>
            <span style={{ color: "#ccc4ce" }}>/</span>
            <a
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 hover:text-[#695680] transition-all"
              style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
            >
              LinkedIn
            </a>
          </div>
        </footer>

        {/* Background decoration layer */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-10">
          <div className="absolute top-20 right-[5%] rotate-12">
            <span className="material-symbols-outlined text-[120px]">brush</span>
          </div>
          <div className="absolute bottom-40 left-[2%] -rotate-6">
            <span className="material-symbols-outlined text-[100px]">code</span>
          </div>
          <div className="absolute top-[60%] right-[10%] -rotate-[15deg]">
            <span className="material-symbols-outlined text-[140px]">token</span>
          </div>
        </div>
      </main>

      <MobileNav activePage="projects" />
    </div>
  );
}
