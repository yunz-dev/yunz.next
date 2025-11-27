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
    title: "PriceByte",
    description: "PriceByte is designed to help users compare grocery prices across multiple stores, find the best deals, and make informed shopping decisions.",
    techStack: ["SpringBoot", "NextJS", "Redis", "PostgreSQL", "ChromaDB", "RabbitMQ", "Python"],
    repo: "https://github.com/yunz-dev/PriceByte",
    live: "https://pricebyte.yunz.app",
    image: "/images/pricebyte.png"
  },
  {
    id: 2,
    title: "CrowdFlare",
    description: "CrowdFlare helps UNSW students find quiet spots on campus using a real-time, interactive map. Users report busy areas ('flares'), allowing others to instantly see current crowd levels and make informed decisions about where to go.",
    techStack: ["Go", "MongoDB", "Redis", "HTMX", "AlpineJS"],
    repo: "https://github.com/yunz-dev/crowdflare",
    live: "https://crowdflare-production.up.railway.app/",
    image: "/images/crowdflare.png"
  },
  {
    id: 3,
    title: "redis but 'Brown'",
    description: "A Redis clone written in Rust, oxidized for high performance and concurrency. This project implements a fully functional in-memory data structure store with support for various data types, commands, and high-throughput operations.",
    techStack: ["Rust", "Threads", "Concurrency", "Database", "Performance"],
    repo: "https://github.com/yunz-dev/redis-but-brown",
    live: "https://github.com/yunz-dev/redis-but-brown",
    image: "/images/redis-but-brown.jpg"
  }
];

export const oss: Project[] = [
  {
    id: 1,
    title: "Bunster",
    description: "A shell compiler that converts shell scripts into secure, portable and static binaries. It literally compiles them to standalone shell-independent programs.",
    techStack: ["Go", "Bash"],
    repo: "https://github.com/yassinebenaid/bunster",
    live: "https://bunster.netlify.app/",
    image: "/images/bunster.png"
  },
  {
    id: 2,
    title: "Nixpkgs",
    description: "Nixpkgs is a collection of over 100,000 software packages that can be installed with the Nix package manager. It also implements NixOS, a purely-functional Linux distribution.",
    techStack: ["Nix", "Linux", "Shell"],
    repo: "https://github.com/NixOS/nixpkgs",
    live: "https://search.nixos.org/packages",
    image: "/images/nixpkgs.png"
  },
  {
    id: 3,
    title: "Golio",
    description: "Golio is a wrapper for the Riot API and the Data Dragon service. It is written purely in Go and provides idiomatic access to all API endpoints.",
    techStack: ["Go", "API"],
    repo: "https://github.com/KnutZuidema/golio",
    live: "https://github.com/KnutZuidema/golio",
    image: "/images/golio.png"
  }
];
