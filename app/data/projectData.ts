export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  repo: string;
  live: string;
  image: string;
}

// projectData.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  repo: string;
  live: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GEDIS",
    description: "A powerful distributed system for efficient data processing.A powerful distributed system for efficient data processing.",
    techStack: ["Go"],
    repo: "https://github.com/yunz-dev/gedis",
    live: "https://gedis-demo.com",
    image: "/images/hasegi.jpg"
  },
  {
    id: 2,
    title: "LiMao",
    description: "A golang powered data driven application to supplement in language learning",
    techStack: ["Go", "PostgreSQL", "Redis", "HTMX", "AlpineJS"],
    repo: "https://github.com/yunz-dev/LiMao",
    live: "https://limao-chat.com",
    image: "/images/hasegi.jpg"
  },
  {
    id: 3,
    title: "SPNW",
    description: "A Habit tracking app built with FASTAPI, MONGODB, HTMX and ALPINE",
    techStack: ["FastAPI", "MongoDB", "HTMX", "AlpineJS", "Tailwind"],
    repo: "https://github.com/yunz-dev/spnw",
    live: "https://spnw-proxy.com",
    image: "/images/hasegi.jpg"
  }
];

export const oss: Project[] = [
  {
    id: 1,
    title: "Bunster",
    description: "A shell compiler that converts shell scripts into secure, portable and static binaries. ",
    techStack: ["Go", "Bash"],
    repo: "https://github.com/yassinebenaid/bunster",
    live: "https://bunster.netlify.app/",
    image: "/images/hasegi.jpg"
  },
  {
    id: 2,
    title: "Nixpkgs",
    description: "The Nix Packages collection containing thousands of software packages.",
    techStack: ["Nix", "Linux", "Shell"],
    repo: "https://github.com/NixOS/nixpkgs",
    live: "https://search.nixos.org/packages",
    image: "/images/hasegi.jpg"
  },
  {
    id: 3,
    title: "Golio",
    description: "A Go client library for the Riot Games API.",
    techStack: ["Go", "API"],
    repo: "https://github.com/KnutZuidema/golio",
    live: "https://golio-api.com",
    image: "/images/hasegi.jpg"
  }
];
