import Link from "next/link";
import { TourCard } from "./TourCard";

export function TourList({ data }) {
  if (data.length === 0)
    return (
      <div className="flex flex-col items-center">
        <h4 className="text-lg">No Tours Were Found...</h4>
        <Link href={"/tours/new-tour"} className="btn btn-primary mt-5">
          Add Tour
        </Link>
      </div>
    );
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((tour) => {
        return <TourCard key={tour.id} tour={tour} />;
      })}
    </div>
  );
}
