import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center text-center px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold mb-4">This is Yunz</h1>
        <p className="text-lg mb-6">A passionate backend developer and tech enthusiast</p>
        <div className="flex justify-center gap-6">
          <Link
            href="#projects"
            className="inline-block px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            See My Projects
          </Link>
          <Link
            href="/fun"
            className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-500 transition"
          >
            Check Out My Fun Page
          </Link>
        </div>
      </div>
    </section>
  );
}
