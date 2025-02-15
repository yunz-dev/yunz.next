"use client";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">This is Yunz</h1>
        <div className="text-3xl mb-6">
        <span>Passionate in </span>
        <Typewriter
          words={["backend engineering.", "devops and cloud", "machine learning", "creating"]}
          loop={0} // Infinite loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />

        </div>
        <div className="flex justify-center gap-6">
          <Link
            href="#projects"
            className="inline-block px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            See My Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
