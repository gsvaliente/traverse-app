"use client";

import { useState } from "react";

export function Chat() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(query);
    setQuery("");
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        <h2 className="text-5xl">Messages</h2>
      </div>
      <form className="max-w-4xl pt-12" onSubmit={handleSubmit}>
        <div className="join w-full">
          <input
            className="input input-bordered join-item w-full"
            type="text"
            placeholder="Message me"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-primary join-item" type="submit">
            Ask Question
          </button>
        </div>
      </form>
    </div>
  );
}
