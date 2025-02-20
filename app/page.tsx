"use client";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Socials from "./components/Socials";
import Cursor from "./components/Cursor";
import { InfiniteSlider } from "./components/Slider";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
    <Cursor />
      {/* Hero Section - Full Screen */}
      <Hero />

      {/* About Section */}
      <About />
      <hr className="w-4/5 mx-auto my-4 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0"></hr>


      {/* Projects Section */}
      <Projects />
      <hr className="w-4/5 mx-auto my-4 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0"></hr>

      {/* Open Source Contributions Section */}
      <OpenSource />
      <hr className="w-4/5 mx-auto my-4 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent border-0"></hr>

      <InfiniteSlider/ >

      {/* Social Media Section */}
      <Socials />
    </div>
  );
}
