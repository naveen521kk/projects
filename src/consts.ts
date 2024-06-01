import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "Naveen M K",
  DESCRIPTION:
    "This page contains a list of projects that Naveen M K has worked on. It includes personal projects, open-source contributions, and freelance work.",
  AUTHOR: "Naveen M K",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
};

// Projects Page
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "naveen521kk@gmail.com",
    HREF: "mailto:naveen521kk@gmail.com",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "naveen521kk",
    HREF: "https://github.com/naveen521kk",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "naveen521kk",
    HREF: "https://www.linkedin.com/in/naveen521kk/",
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "naveen521kk",
    HREF: "https://twitter.com/naveen521kk",
  },
];
