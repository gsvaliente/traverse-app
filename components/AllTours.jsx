"use client";

import { getAllTours } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { TourList } from "./TourList";

export function AllTours() {
  const [userSearchQuery, setUserSearchQuery] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["tours", ""],
    queryFn: () => getAllTours(userSearchQuery),
  });

  return (
    <div className="h-[calc(100vh-7rem)] py-5 my-5 flex flex-col">
      <form className="max-w-lg mb-12 ">
        <div className="join w-full">
          <input
            type="text"
            placeholder="enter city or country"
            className="input input-bordered join-item w-full"
            value={userSearchQuery}
            onChange={(e) => setUserSearchQuery(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn btn-primary join-item"
            disabled={isPending}
            onClick={() => setSearchValue("")}
          >
            {isPending ? "please wait" : "reset"}
          </button>
        </div>
      </form>
      {isPending ? <span className="loading"></span> : <TourList data={data} />}
    </div>
  );
}
