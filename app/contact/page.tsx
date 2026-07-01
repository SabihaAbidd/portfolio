"use client";

import { useState } from "react";
import SidebarNav from "@/components/SidebarNav";
import MobileNav from "@/components/MobileNav";
import { LINKS } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open mailto as a simple UI-only handler
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#dcdad3" }}
    >
      <SidebarNav activePage="contact" />

      <main className="lg:ml-64 p-2 md:p-10">
        {/* Cork pinboard container */}
        <div
          className="max-w-[1200px] mx-auto min-h-[90vh] cork-texture rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          style={{ border: "8px solid #8d6e63" }}
        >
          {/* Background push-pin doodle */}
          <div className="absolute top-10 right-10 opacity-20 pointer-events-none">
            <span className="material-symbols-outlined text-8xl" style={{ color: "#e5e2db" }}>
              push_pin
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Left: Contact Form */}
            <div
              className="lg:col-span-7 shadow-xl p-8 rounded-lg paper-texture relative"
              style={{
                backgroundColor: "#f0eee7",
                transform: "rotate(-0.5deg)",
              }}
            >
              {/* Washi tape accent */}
              <div
                className="absolute -top-4 -left-4 w-32 h-10 washi-tape-lavender flex items-center justify-center shadow-sm"
                style={{ transform: "rotate(-15deg)" }}
              >
                <span
                  className="uppercase tracking-widest text-[11px]"
                  style={{ fontFamily: "var(--font-mono)", color: "#49375f" }}
                >
                  Post This!
                </span>
              </div>

              <h2
                className="flex items-center gap-3 mb-8"
                style={{
                  fontFamily: "var(--font-bricolage)",
                  fontSize: "clamp(24px, 4vw, 32px)",
                  fontWeight: "700",
                  color: "#695680",
                }}
              >
                <span className="material-symbols-outlined">edit_note</span>
                Drop a Note
              </h2>

              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center py-16 gap-4"
                >
                  <div className="text-5xl">✉️</div>
                  <p
                    className="text-[18px] font-bold"
                    style={{ fontFamily: "var(--font-bricolage)", color: "#695680" }}
                  >
                    Message sent! I&apos;ll reply soon. 💜
                  </p>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="relative group">
                    <label
                      className="block mb-2"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
                    >
                      My name is...
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-0 border-b-2 focus:outline-none px-0 py-2 text-xl transition-colors"
                      style={{
                        borderBottomColor: "#ccc4ce",
                        fontFamily: "var(--font-mono)",
                        color: "#241339",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#695680")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "#ccc4ce")}
                    />
                  </div>

                  <div className="relative group">
                    <label
                      className="block mb-2"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
                    >
                      You can reach me at...
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-0 border-b-2 focus:outline-none px-0 py-2 text-xl transition-colors"
                      style={{
                        borderBottomColor: "#ccc4ce",
                        fontFamily: "var(--font-mono)",
                        color: "#241339",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#695680")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "#ccc4ce")}
                    />
                  </div>

                  <div className="relative group">
                    <label
                      className="block mb-2"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
                    >
                      I wanted to say...
                    </label>
                    <textarea
                      placeholder="Type your message here..."
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-0 border-b-2 focus:outline-none px-0 py-2 text-xl transition-colors resize-none"
                      style={{
                        borderBottomColor: "#ccc4ce",
                        fontFamily: "var(--font-mono)",
                        color: "#241339",
                      }}
                      onFocus={(e) => (e.target.style.borderBottomColor = "#695680")}
                      onBlur={(e) => (e.target.style.borderBottomColor = "#ccc4ce")}
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      className="group flex items-center gap-3 px-10 py-4 rounded-xl shadow-lg hover:rotate-1 hover:scale-105 active:scale-95 transition-all"
                      style={{
                        backgroundColor: "#695680",
                        color: "#ffffff",
                        fontFamily: "var(--font-bricolage)",
                        fontSize: "22px",
                        fontWeight: "600",
                      }}
                    >
                      Send Note
                      <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                        send
                      </span>
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-12 flex items-center justify-center gap-4 opacity-60">
                <span className="material-symbols-outlined" style={{ color: "#4a454d" }}>
                  mark_email_unread
                </span>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}>
                  I usually reply within 24 hours!
                </p>
              </div>
            </div>

            {/* Right: Postcard links */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {/* Email postcard */}
              <a
                href={`mailto:${LINKS.email}`}
                className="wiggle-hover bg-white p-6 rounded-sm shadow-md relative cursor-pointer group block"
                style={{ transform: "rotate(1.5deg)", "--card-rot": "1.5deg" } as React.CSSProperties}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#ba1a1a", fontVariationSettings: "'FILL' 1" }}
                  >
                    push_pin
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#b8a2d1", color: "#49375f" }}
                  >
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h3
                      className="text-[22px] font-semibold leading-none"
                      style={{ fontFamily: "var(--font-bricolage)", color: "#1c1c18" }}
                    >
                      Email Me
                    </h3>
                    <p
                      className="mt-1 truncate"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        color: "#695680",
                      }}
                    >
                      {LINKS.email}
                    </p>
                  </div>
                </div>
                <div
                  className="mt-4 pt-4 border-t border-dashed flex justify-between items-center"
                  style={{ borderColor: "#ccc4ce" }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#4a454d" }}>
                    Active Connection
                  </span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    open_in_new
                  </span>
                </div>
              </a>

              {/* LinkedIn postcard */}
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="wiggle-hover p-6 rounded-sm shadow-md relative cursor-pointer group block"
                style={{
                  backgroundColor: "#cae8c1",
                  transform: "rotate(-2deg)",
                  "--card-rot": "-2deg",
                } as React.CSSProperties}
              >
                <div className="absolute -top-3 left-1/4">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#695680", fontVariationSettings: "'FILL' 1" }}
                  >
                    push_pin
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#4f694a", color: "#cae8c1" }}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      share
                    </span>
                  </div>
                  <div>
                    <h3
                      className="text-[22px] font-semibold leading-none"
                      style={{ fontFamily: "var(--font-bricolage)", color: "#344d30" }}
                    >
                      LinkedIn
                    </h3>
                    <p
                      className="mt-1 truncate"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        color: "#4b6546",
                      }}
                    >
                      linkedin.com/in/sabihaabid/
                    </p>
                  </div>
                </div>
                <div
                  className="mt-4 pt-4 border-t border-dashed flex justify-between items-center"
                  style={{ borderColor: "rgba(52,77,48,0.2)" }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#344d30" }}>
                    Networking Corner
                  </span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#344d30" }}>
                    open_in_new
                  </span>
                </div>
              </a>

              {/* GitHub postcard */}
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="wiggle-hover p-6 rounded-sm shadow-md relative cursor-pointer group block text-white"
                style={{
                  backgroundColor: "#24292e",
                  transform: "rotate(0.8deg)",
                  "--card-rot": "0.8deg",
                } as React.CSSProperties}
              >
                <div className="absolute -top-3 right-1/4">
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#e5e2db", fontVariationSettings: "'FILL' 1" }}
                  >
                    push_pin
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#24292e]">
                    <span className="material-symbols-outlined">code</span>
                  </div>
                  <div>
                    <h3
                      className="text-[22px] font-semibold leading-none"
                      style={{ fontFamily: "var(--font-bricolage)" }}
                    >
                      GitHub
                    </h3>
                    <p
                      className="mt-1 truncate"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        color: "#e5e2db",
                      }}
                    >
                      github.com/SabihaAbidd
                    </p>
                  </div>
                </div>
                <div
                  className="mt-4 pt-4 border-t border-dashed flex justify-between items-center"
                  style={{ borderColor: "rgba(229,226,219,0.2)" }}
                >
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#e5e2db" }}>
                    Code Scrapbook
                  </span>
                  <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity text-[#e5e2db]">
                    open_in_new
                  </span>
                </div>
              </a>

              {/* Sticky note quote */}
              <div
                className="p-6 shadow-lg relative mt-2"
                style={{
                  backgroundColor: "#ffdcc4",
                  transform: "rotate(5deg)",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-8 h-8 rounded-bl-3xl"
                  style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                />
                <p
                  className="text-lg italic"
                  style={{ fontFamily: "var(--font-mono)", color: "#6f3800" }}
                >
                  &ldquo;Let&apos;s build something amazing together! ✨&rdquo;
                </p>
                <div className="flex justify-end mt-2">
                  <span className="material-symbols-outlined" style={{ color: "#8e4e14" }}>
                    favorite
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pinboard footer */}
          <div
            className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 pt-8"
            style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
          >
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-4xl" style={{ color: "#4a454d" }}>
                local_post_office
              </span>
              <div className="text-left">
                <p
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--font-bricolage)" }}
                >
                  Sabiha Abid Portfolio
                </p>
                <p
                  className="text-xs opacity-60"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Hand-crafted with passion &amp; code.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              {["draw", "auto_awesome", "celebration"].map((icon) => (
                <div
                  key={icon}
                  className="p-3 bg-white rounded-full shadow-sm hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="material-symbols-outlined" style={{ color: "#695680" }}>
                    {icon}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* HIRED! sticker */}
          <div className="absolute bottom-4 right-4" style={{ transform: "rotate(15deg)" }}>
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xs border-4 border-white shadow-lg"
              style={{
                backgroundColor: "#4b6546",
                color: "#ffffff",
                fontFamily: "var(--font-mono)",
              }}
            >
              HIRED!
            </div>
          </div>

          {/* Cork pin dots */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 hidden xl:block">
            <div className="space-y-4">
              {[["#ba1a1a"], ["#695680"], ["#4b6546"]].map(([color], i) => (
                <div
                  key={i}
                  className="w-4 h-4 rounded-full shadow-inner"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Global footer */}
        <footer className="flex flex-col md:flex-row justify-center items-center w-full py-8 px-2 text-center gap-2">
          <p
            className="opacity-70"
            style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#4a454d" }}
          >
            © 2026 Sabiha Abid. All rights reserved.
          </p>
        </footer>
      </main>

      {/* Mobile nav */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 py-3 px-6 flex justify-around items-center shadow-[0_-4px_10px_rgba(0,0,0,0.1)]"
        style={{ backgroundColor: "#f0eee7" }}
      >
        {[
          { icon: "home",       href: "/" },
          { icon: "person",     href: "/about" },
          { icon: "mail",       href: "/contact", active: true },
          { icon: "folder",     href: "/projects" },
          { icon: "settings",   href: "#" },
        ].map((item) => (
          <a
            key={item.icon}
            href={item.href}
            className="flex flex-col items-center gap-1"
            style={{ color: item.active ? "#695680" : "#4a454d", opacity: item.active ? 1 : 0.7 }}
          >
            {item.active ? (
              <div
                className="p-2 rounded-lg -translate-y-4 shadow-lg"
                style={{ backgroundColor: "#b8a2d1" }}
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {item.icon}
                </span>
              </div>
            ) : (
              <span className="material-symbols-outlined">{item.icon}</span>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
