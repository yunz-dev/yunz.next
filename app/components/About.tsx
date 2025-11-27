import FadeScroll from "./FadeScroll";

export default function About() {
  return (
    <section className="py-20 px-6 text-center" id="about">
      <div className="max-w-3xl mx-auto">
        <FadeScroll>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
           <p className="text-lg text-gray-400">
             Hi, I&apos;m Yunus. I&apos;m a backend engineer fascinated by what happens under the hood. I specialise in building reliable, high-performance systems using Go, Python, and Rust, with a focus on distributed architecture and cloud infrastructure. I love solving complex concurrency problems and contributing to the open-source ecosystem.
           </p>
        </FadeScroll>
      </div>
    </section>
  );
}
