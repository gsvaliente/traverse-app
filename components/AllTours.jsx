"use client";

import { getAllTours } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { TourList } from "./TourList";

export function AllTours() {
  const [userSearchQuery, setUserSearchQuery] = useState("");

  const { data, isPending } = useQuery({
    queryKey: ["tours", userSearchQuery],
    queryFn: () => getAllTours(userSearchQuery),
  });

  return (
    <div className=" py-5 my-5 flex flex-col items-center">
      <h2 className="capitalize mt-5 text-4xl font-subTitle">All Your Tours</h2>
      <form className="max-w-lg mb-12  mt-5">
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
            onClick={() => setUserSearchQuery("")}
          >
            {isPending ? "please wait" : "reset"}
          </button>
        </div>
      </form>
      {isPending ? <span className="loading"></span> : <TourList data={data} />}
    </div>
  );
}
