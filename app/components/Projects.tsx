import Link from "next/link";

export default function Projects() {
  return (
    <section className="bg-gray-800 text-white py-20" id="projects">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">SPNW</h3>
            <p className="mb-4">A Habit tracking app built with FASTAPI, MONGODB, HTMX and ALPINE</p>
            <Link
              href="https://github.com/yunz-dev/spnw-api"
              className="inline-block text-gray-300 hover:underline"
            >
              View Project
            </Link>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">LiMao</h3>
            <p className="mb-4">A golang powered data driven application to supplement in language learning</p>
            <Link
              href="https://github.com/yunz-dev/LiMao"
              className="inline-block text-gray-300 hover:underline"
            >
              View Project
            </Link>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">YAWL</h3>
            <p className="mb-4">Yet Another Wish List</p>
            <Link
              href="https://github.com/monkieeboi/YAWL"
              className="inline-block text-gray-300 hover:underline"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
