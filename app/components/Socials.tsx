import FadeScroll from "./FadeScroll";

export default function Socials() {
  return (
    <section className="bg-black py-12 px-6 text-center" id="socials">
      <FadeScroll>
        <h2 className="text-3xl font-semibold mb-6">Let&apos;s Connect</h2>
        <div className="flex justify-center gap-8 text-lg">
          <a
            href="https://www.linkedin.com/in/yunzwastaken"
            target="_blank"
            className="text-gray-300 cursor-none hover:text-gray-100"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yunz-dev"
            target="_blank"
            className="text-gray-300 cursor-none hover:text-gray-100"
          >
            GitHub
          </a>
          <a
            href="https://yunz-dev.medium.com"
            target="_blank"
            className="text-gray-300 cursor-none hover:text-gray-100"
          >
            Blog
          </a>
          <a
            href="/fun"
            className="text-gray-300 cursor-none hover:text-gray-100"
          >
            Bored?
          </a>
        </div>
      </FadeScroll>
    </section>
  );
}
