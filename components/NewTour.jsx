"use client";

import { createTourResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function NewTour() {
  const { mutate, isPending, data } = useMutation({
    mutationFn: async (destination) => {
      const newTour = await createTourResponse(destination);

      if (newTour) {
        return newTour;
      }

      toast.error("City and country are not found");
      return null;
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const selectedDestination = Object.fromEntries(formData.entries());

    mutate(selectedDestination);
  };

  return (
    <div className="h-[calc(100vh-7rem)] py-5 my-5">
      <form className="flex items-center justify-center flex-col" onSubmit={handleSubmit}>
        <h2 className="capitalize mb-4 text-4xl">Create your dream destination</h2>
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="city"
            name="city"
            required
          />
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="country"
            name="country"
            required
          />
          <select name="tourType" className="select input-bordered join-item w-full" required>
            <option value="" disabled selected>
              Select Tour Type
            </option>
            <option value="family">Family</option>
            <option value="romantic">Romantic</option>
            <option value="adventure">Adventure</option>
            <option value="relaxed">Relaxed</option>
          </select>
          <select name="tourLength" className="select input-bordered join-item w-sm" required>
            <option value="" disabled selected>
              Select Tour Length
            </option>
            <option value="1">1 day</option>
            <option value="2">2 days</option>
            <option value="3">3 days</option>
            <option value="4">4 days</option>
            <option value="5">5 days</option>
          </select>
          <button className="btn btn-primary join-item capitalize" type="submit">
            create tour
          </button>
        </div>
      </form>
    </div>
  );
}
