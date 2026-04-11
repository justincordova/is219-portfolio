export const CURATED_PROJECTS = [
  "cspathfinder",
  "findu",
  "dotcor",
  "JobDaemon",
  "student-depression-prediction",
  "Min-OSS",
  "bunso",
  "PlushPals",
  "CookieBoy",
  "LetsType",
  "expense-tracker",
  "task-manager",
  "to-do-app",
  "sort-algos",
  "decode-sec",
  "rotating-image-gallery",
  "mini-calendar",
  "image-generator",
  "file-downloader",
] as const;

export type CuratedProject = (typeof CURATED_PROJECTS)[number];

export const FEATURED_PROJECTS = ["findu", "dotcor", "cspathfinder"] as const;
