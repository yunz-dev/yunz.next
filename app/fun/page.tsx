"use client";
export default function Fun() {

  const spinHandler = () => {
    document.body.style.transition = 'all 1s';
    document.body.style.transform = 'rotate(360deg)';
    location.reload();
  };


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-6">Fun Page</h1>
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
