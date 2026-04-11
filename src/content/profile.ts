export const profile = {
  name: "Justin Cordova",
  role: "Full-Stack Engineer",
  heroTitle: {
    main: "Full-Stack Engineer",
    sub: "who cares about decisions.",
  },
  promise:
    "I build thoughtful full-stack software — where the code, the UX, and the decisions all hang together.",
  subPromise:
    "Currently shipping .NET at Pure Technology Inc. CS @ NJIT.",
  email: "justinavodroc@gmail.com",
  github: "https://github.com/justincordova",
  linkedin: "https://www.linkedin.com/in/justinalolorcordova/",
  location: "New Jersey",
  resumeUrl: "/resume.pdf",
  lastUpdated: "2026-04-10",
} as const;

export type Profile = typeof profile;
