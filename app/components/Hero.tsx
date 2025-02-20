"use client";
import { Typewriter } from "react-simple-typewriter";
import Fade from "./Fade";

export default function Hero() {
  const scrollToContent = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-black text-white h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container mx-auto relative z-10">
        <Fade>
          <h1 className="text-5xl font-bold mb-4">This is Yunz</h1>
          <div className="text-3xl mb-6">
            <span>Empowering through </span>
            <span className="font-bold">
              <Typewriter
                words={["Backend Engineering", "Devops and Cloud", "Machine Learning"]}
                loop={0} // Infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
          <div className="flex justify-center gap-6">
            <button
  className="inline-block cursor-none px-8 py-2 bg-gray-900 hover:bg-gray-900 text-white rounded-lg opacity-80 hover:opacity-100 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500"
  onClick={scrollToContent}
>
  <img className="w-12 h-12 text-white" src="svg/down_arrow.svg" alt="down arrow" />
</button>


          </div>
        </Fade>
      </div>
    </section>
  );
}
