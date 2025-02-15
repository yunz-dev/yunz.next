"use client";
import Link from "next/link";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section - Full Screen */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Open Source Contributions Section */}
      <OpenSource />

      {/* Social Media Section */}
      <Socials />
    </div>
  );
}
