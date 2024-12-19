import { useState } from "react";

const NewsLetter = () => {
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
  }

  return (
    <div className="text-center my-14 space-y-6 bg-slate-400 px-2 py-6 rounded-xl">
      <h1 className="text-2xl font-bold">Stay Connected with Lumeo!</h1>
      <p className="text-xl text-gray-500">
        Get the latest updates, exclusive offers, and insider news delivered
        straight to your inbox.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-1/2 mx-auto items-center space-x-4"
      >
        <input
          type="email"
          placeholder="Enter your email address..."
          className="px-6 py-4 border w-1/2 md:w-2/3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="bg-black text-white px-6 py-4 text-xl">
          Subscribe!
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
