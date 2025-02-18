import FadeScroll from "./FadeScroll";

export default function About() {
  return (
    <section className="py-20 px-6 text-center" id="about">
      <div className="max-w-3xl mx-auto">
        <FadeScroll>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-400">
            Hi I&apos;m Yunus, a backend developer with a passion for building scalable, performant systems.
            I specialize in working with modern technologies like Go, Java, and Rust, and I
            have a strong interest in cloud platforms like AWS and Azure. Also recently starting to integrate ML/AI in some of my projects.
          </p>
        </FadeScroll>
      </div>
    </section>
  );
}
