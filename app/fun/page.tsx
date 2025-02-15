"use client";
import { useState, useEffect } from "react";

export default function Fun() {
  const [count, setCount] = useState<number>(0);

  // Fetch the current count from the server
  const fetchCount = async () => {
    const res = await fetch("/api/counter");
    const data = await res.json();
    setCount(data.count);
  };

  // Increment the count on the server
  const incrementCount = async () => {
    const res = await fetch("/api/counter", {
      method: "POST",
    });
    const data = await res.json();
    setCount(data.count);
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-6">Fun Page</h1>
      <p className="text-lg mb-6">Current Count: {count}</p>
      <button
        onClick={incrementCount}
        className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
      >
        Increment Count
      </button>
    </div>
  );
}
