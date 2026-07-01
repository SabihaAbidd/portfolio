// Navigation items
export const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: "home",
    activeColor: "bg-primary-container text-on-primary-container",
  },
  {
    label: "About",
    href: "/about",
    icon: "person",
    activeColor: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    label: "Skills",
    href: "/skills",
    icon: "construction",
    activeColor: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    label: "Projects",
    href: "/projects",
    icon: "folder_special",
    activeColor: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    label: "Experience",
    href: "/experience",
    icon: "history_edu",
    activeColor: "bg-tertiary-container text-on-tertiary-container",
  },
  {
    label: "Contact",
    href: "/contact",
    icon: "mail",
    activeColor: "bg-tertiary-container text-on-tertiary-container",
  },
];

// Home notebook tabs (right edge)
export const HOME_TABS = [
  {
    label: "Home",
    href: "/",
    bg: "bg-[#695680]",
    text: "text-white",
    rotate: "-rotate-1",
  },
  {
    label: "About",
    href: "/about",
    bg: "bg-[#cae8c1]",
    text: "text-[#4f694a]",
    rotate: "rotate-1",
  },
  {
    label: "Skills",
    href: "/skills",
    bg: "bg-[#e99959]",
    text: "text-[#653200]",
    rotate: "-rotate-2",
  },
  {
    label: "Projects",
    href: "/projects",
    bg: "bg-[#b8a2d1]",
    text: "text-[#49375f]",
    rotate: "rotate-1",
  },
  {
    label: "Experience",
    href: "/experience",
    bg: "bg-[#e5e2db]",
    text: "text-[#4a454d]",
    rotate: "-rotate-1",
  },
  {
    label: "Contact",
    href: "/contact",
    bg: "bg-[#ffdad6]",
    text: "text-[#93000a]",
    rotate: "rotate-2",
  },
];

// Projects
export const PROJECTS = [
  {
    id: "hostelwalla",
    name: "HostelWalla",
    status: "Currently in development",
    description:
      "Building a platform to help students discover verified hostels near universities across Pakistan.",
    icon: "apartment",
    iconBg: "bg-[#cae8c1]",
    iconColor: "text-[#4b6546]",
    tech: ["Next.js", "Tailwind", "Maps API"],
    rotate: "-rotate-1",
    waspiColor: "washi-tape-lavender",
    waspiPos: "absolute -top-3 -right-6 w-24 h-8",
    clipIcon: "attach_file",
    viewColor: "text-[#695680]",
    githubUrl: "https://github.com/SabihaAbidd",
  },
  {
    id: "awaaz",
    name: "Awaaz-e-GenZ",
    status: null,
    description:
      "Platform focused on empowering Gen Z voices and civic engagement through AI-powered sentiment analysis and trend tracking.",
    icon: "campaign",
    iconBg: "bg-[#e99959]",
    iconColor: "text-[#653200]",
    tech: ["React", "AI Agents", "Grok API"],
    rotate: "rotate-[1.5deg]",
    waspiColor: "washi-tape-peach",
    waspiPos: "absolute -bottom-4 -left-6 w-20 h-8",
    clipIcon: "pin_drop",
    viewColor: "text-[#8e4e14]",
    githubUrl: "https://github.com/SabihaAbidd",
  },
  {
    id: "crisislens",
    name: "CrisisLens AI",
    status: null,
    description:
      "Multi-agent AI system for crisis monitoring and response orchestration through cross-platform data harvesting.",
    icon: "emergency",
    iconBg: "bg-[#b8a2d1]",
    iconColor: "text-[#49375f]",
    tech: ["Python", "LangChain", "NLP"],
    rotate: "-rotate-[0.8deg]",
    waspiColor: null,
    waspiPos: null,
    clipIcon: "bookmark",
    viewColor: "text-[#695680]",
    githubUrl: "https://github.com/SabihaAbidd",
  },
];

// Experience
export const EXPERIENCE = [
  {
    id: "gdg",
    org: "Google Developer Groups on Campus FAST Islamabad",
    role: "WiT Operations Officer · Technical Workshops Officer",
    period: "2023 - 2024",
    bg: "bg-[#ffdcc4]",
    textColor: "text-[#6f3800]",
    dotBg: "bg-[#ffdcc4]",
    icon: "push_pin",
    iconColor: "text-[#4b6546]",
    rotate: "rotate-1",
    highlights: [
      "Organized and supported technical workshops, community events, and developer-focused initiatives.",
      "Contributed to planning and executing activities that promote learning, collaboration, and innovation within the FAST student community.",
      "Worked closely with the team to strengthen student engagement in technology and software development.",
    ],
    tags: ["#Community", "#Leadership", "#TechnicalTraining"],
    bgIcon: "groups",
  },
  {
    id: "nascon",
    org: "NaSCon (National Solutions Convention)",
    role: "Officer at Speed Programming Competition",
    period: "2024",
    bg: "bg-[#cdebc4]",
    textColor: "text-[#344d30]",
    dotBg: "bg-[#cdebc4]",
    icon: "attach_file",
    iconColor: "text-[#695680]",
    rotate: "-rotate-1",
    highlights: [
      "Managed technical logistics and evaluation processes for one of the largest competitive programming events in the region.",
      "Collaborated with technical leads to ensure fair play and smooth execution of high-pressure coding challenges.",
    ],
    tags: ["#CompetitiveProgramming", "#Management"],
    bgIcon: "code",
  },
];

// Links
export const LINKS = {
  github: "https://github.com/SabihaAbidd",
  linkedin: "https://www.linkedin.com/in/sabihaabid/",
  email: "sabihaabid2021@gmail.com",
};
