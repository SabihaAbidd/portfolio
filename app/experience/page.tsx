"use client";

import { useEffect, useRef } from "react";
import SidebarNav from "@/components/SidebarNav";
import MobileNav from "@/components/MobileNav";
import { EXPERIENCE, LINKS } from "@/lib/constants";

export default function ExperiencePage() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f6f3ec" }}>
      <SidebarNav activePage="experience" />

      {/* Main canvas */}
      <main className="lg:ml-[272px] max-w-[1200px] mx-auto p-6 md:p-10 relative">
        {/* Binder holes (mobile) */}
        <div className="absolute -left-4 top-1/4 flex flex-col gap-12 lg:hidden">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full border-4 binder-hole"
              style={{ borderColor: "rgba(123,117,126,0.2)" }}
            />
          ))}
        </div>

        <section className="paper-grain p-8 md:p-12 shadow-xl rounded-xl relative overflow-hidden min-h-screen">
          {/* Washi tape corner */}
          <div
            className="absolute -top-4 -right-12 w-48 h-12 washi-tape-lavender z-10"
            style={{ transform: "rotate(45deg)" }}
          />

          {/* Page header */}
          <header className="mb-16 relative">
            <div
              className="inline-block px-4 py-1 rounded-full mb-4 -rotate-2"
              style={{
                backgroundColor: "#cae8c1",
                color: "#4f694a",
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
              }}
            >
              2023 — 2024
            </div>
            <h1
              className="relative text-[clamp(48px,7vw,72px)]"
              style={{
                fontFamily: "var(--font-bricolage)",
                fontWeight: "800",
                color: "#1c1c18",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              Experience
              <span className="absolute -right-12 top-0 opacity-20">
                <span className="material-symbols-outlined text-6xl">lightbulb</span>
              </span>
            </h1>
            <div
              className="h-1 w-32 rounded-full mt-2"
              style={{ backgroundColor: "#8e4e14" }}
            />
            <p
              className="max-w-2xl mt-6 text-[18px]"
              style={{
                fontFamily: "var(--font-worksans)",
                color: "#4a454d",
                lineHeight: "1.6",
              }}
            >
              A curated collection of my professional journey, designed like a series of
              travel tickets through the landscape of technology and design.
            </p>
          </header>

          {/* Vertical timeline */}
          <div
            ref={timelineRef}
            className="relative ml-4 md:ml-12 border-l-2 border-dashed py-8 space-y-16"
            style={{ borderColor: "#ccc4ce" }}
          >
            {EXPERIENCE.map((exp) => (
              <div key={exp.id} className="timeline-item relative pl-12">
                {/* Timeline dot */}
                <div
                  className="absolute -left-[9px] top-4 w-4 h-4 rounded-full shadow-sm"
                  style={{ backgroundColor: exp.dotBg }}
                />

                {/* Card */}
                <div
                  className={`p-6 rounded-xl shadow-md ticket-cutout max-w-3xl relative overflow-hidden group ${exp.rotate}`}
                  style={{ backgroundColor: exp.bg, color: exp.textColor }}
                >
                  {/* Pin icon */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span
                      className="material-symbols-outlined text-4xl"
                      style={{ color: exp.iconColor }}
                    >
                      {exp.icon}
                    </span>
                  </div>

                  {/* Card header */}
                  <div
                    className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4 pb-4 border-b"
                    style={{ borderColor: `${exp.textColor}30` }}
                  >
                    <div>
                      <h2
                        className="text-[24px] font-semibold"
                        style={{ fontFamily: "var(--font-bricolage)" }}
                      >
                        {exp.org}
                      </h2>
                      <p
                        className="italic"
                        style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}
                      >
                        {exp.role}
                      </p>
                    </div>
                    <div
                      className="px-4 py-2 rounded font-bold text-xs uppercase tracking-widest shadow-inner whitespace-nowrap text-white"
                      style={{ backgroundColor: exp.textColor, fontFamily: "var(--font-mono)" }}
                    >
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul
                    className="space-y-3 text-[16px]"
                    style={{ fontFamily: "var(--font-worksans)" }}
                  >
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="material-symbols-outlined text-sm mt-1"
                          style={{ color: exp.textColor }}
                        >
                          {i === 0 ? "check_circle" : "verified"}
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.5)",
                          fontFamily: "var(--font-mono)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Background ghost icon */}
                  <div className="absolute right-4 bottom-4 opacity-10 group-hover:opacity-30 transition-opacity rotate-12">
                    <span className="material-symbols-outlined text-8xl">{exp.bgIcon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Yellow sticky note */}
          <div
            className="absolute bottom-12 right-8 w-48 h-48 p-6 shadow-lg -rotate-3 hover:rotate-0 transition-transform cursor-pointer"
            style={{ backgroundColor: "#fdf2a4" }}
          >
            <div
              className="absolute bottom-0 right-0 w-8 h-8 rounded-tl-lg"
              style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
            />
            <span className="material-symbols-outlined mb-2" style={{ color: "#6f3800" }}>
              auto_awesome
            </span>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                lineHeight: "1.5",
                color: "#6f3800",
              }}
            >
              &ldquo;The best way to predict the future is to build it.&rdquo;
              <br /><br />
              — Sabiha&apos;s Studio Note
            </p>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 washi-tape-lavender opacity-50" />
          </div>

          {/* SVG doodle arrow */}
          <div className="hidden lg:block absolute top-1/2 right-12">
            <svg
              className="opacity-40"
              height="100"
              viewBox="0 0 100 100"
              width="100"
              style={{ color: "#ccc4ce" }}
            >
              <path
                d="M10 50 Q 50 10 90 50"
                fill="none"
                stroke="currentColor"
                strokeDasharray="5,5"
                strokeWidth="2"
              />
              <path
                d="M85 45 L 90 50 L 85 55"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="flex flex-col md:flex-row justify-center items-center w-full py-12 px-2 text-center gap-4"
          style={{ color: "#4a454d" }}
        >
          <span
            className="italic"
            style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}
          >
            Property of Sabiha Abid
          </span>
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#ccc4ce" }}
          />
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>
            © 2026 Sabiha Abid. All rights reserved.
          </p>
        </footer>
      </main>

      {/* Floating Contact FAB */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href={`mailto:${LINKS.email}`}
          className="w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group overflow-hidden"
          style={{ backgroundColor: "#8e4e14", color: "#ffffff" }}
        >
          <span className="material-symbols-outlined text-3xl group-hover:-translate-y-[40px] transition-transform">
            mail
          </span>
          <span className="material-symbols-outlined text-3xl absolute translate-y-[40px] group-hover:translate-y-0 transition-transform">
            send
          </span>
        </a>
      </div>

      <MobileNav activePage="experience" />
    </div>
  );
}
