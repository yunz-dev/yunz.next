import Link from "next/link";
export default function OpenSource() {
  return (
    <section className="py-20 px-6" id="opensource">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Open Source Contributions</h2>
        <p className="text-lg text-gray-400 mb-6">
          I love contributing to open source. Here are some projects I’ve worked on:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-600 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Open Source 1</h3>
            <p className="mb-4">Brief description of contribution to open source project 1.</p>
            <Link
              href="#"
              className="inline-block text-gray-300 hover:underline"
            >
              View Contribution
            </Link>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Open Source 2</h3>
            <p className="mb-4">Brief description of contribution to open source project 2.</p>
            <Link
              href="#"
              className="inline-block text-gray-300 hover:underline"
            >
              View Contribution
            </Link>
          </div>
          <div className="bg-gray-600 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Open Source 3</h3>
            <p className="mb-4">Brief description of contribution to open source project 3.</p>
            <Link
              href="#"
              className="inline-block text-gray-300 hover:underline"
            >
              View Contribution
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
