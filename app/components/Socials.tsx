export default function Socials() {
  return (
    <section className="bg-gray-800 py-12 px-6 text-center" id="socials">
      <h2 className="text-3xl font-semibold mb-6">Let's Connect</h2>
      <div className="flex justify-center gap-8">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="text-gray-300 hover:text-gray-100"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="text-gray-300 hover:text-gray-100"
        >
          GitHub
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          className="text-gray-300 hover:text-gray-100"
        >
          Twitter
        </a>
      </div>
    </section>
  );
}
