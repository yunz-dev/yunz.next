export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  repo: string;
  live: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Next.js Portfolio",
    description: "A modern portfolio built with Next.js and Tailwind CSS.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    repo: "https://github.com/username/nextjs-portfolio",
    live: "https://nextjs-portfolio.vercel.app/"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with authentication and Stripe integration.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    repo: "https://github.com/username/ecommerce",
    live: "https://ecommerce-platform.com"
  }
];
