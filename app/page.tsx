import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">Explore my work and projects.</p>
      <div className="mt-6 flex gap-4">
        <Link href="/fun" className="px-4 py-2 bg-green-500 text-white rounded">Fun</Link>
      </div>
    </div>
  );
}
