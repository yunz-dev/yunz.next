"use client";
import { useState } from "react";
import { redirect } from "next/navigation";
import { delay } from "framer-motion";
export default function Fun() {
  console.log('%cOh, Hello There Traveller', 'font-size: 80px; font-family: "Comic Sans MS"; font-weight: bold; background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); -webkit-background-clip: text; color: transparent;');

  const [title, setTitle] = useState("Fun Page");
  const [hasegi, setHasegi] = useState(0)

  const spinHandler = async () => {
    setTitle("🌪️HASEGI🌪️")
    setHasegi(hasegi + 1);
    if (hasegi == 10) {
      redirect("/images/hasegi.jpg");
    }
    document.body.style.transition = 'all 1s';
    document.body.style.transform = 'rotate(360deg)';
    delay( () => {
      document.body.style.transition = '';
      document.body.style.transform = '';
      setTitle("Fun Page")
    }, 2000);
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-6">{title}</h1>
      <p className="text-lg mb-6">Yeah this doesn&apos;t work <strong>yet</strong></p>
      <p className="text-lg mb-6">Current Count: 0</p>
      <button
        className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
      >
        Increment Count
      </button>
      <br></br>
      <button
        onClick={spinHandler}
        className="my-10 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
      >
        🌪️🌪️🌪️
      </button>
    </div>
  );
}
