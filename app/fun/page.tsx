"use client"; // ← This tells Next.js it's a client component

import { useState } from "react";

export default function Fun() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Fun Page</h1>
      <p className="mt-4">Click the button to increase the counter!</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-4 px-6 py-2 bg-purple-500 text-white rounded"
      >
        Count: {count}
      </button>
    </div>
  );
}
