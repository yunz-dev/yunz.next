import FadeScroll from "./FadeScroll";

export default function About() {
  return (
    <section className="py-20 px-6 text-center" id="about">
      <div className="max-w-3xl mx-auto">
        <FadeScroll>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-400">
            Hi, I’m Yunus. I’m a backend engineer fascinated by what happens under the hood.
          </p>
          <br></br>
          <p className="text-lg text-gray-400">
            I spend much of my free time exploring lower-level systems topics such as operating systems, concurrency, and performance internals - currently working on my own implementation of EGOS-2000 (Cornell).
          </p>
          <br></br>
          <p className="text-lg text-gray-400">
            I also volunteer within student engineering communities, helping run technical workshops, mentoring peers, and contributing to open-source projects.
          </p>
        </FadeScroll>
      </div>
    </section>
  );
}
