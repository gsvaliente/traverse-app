import Link from "next/link";

export function TourCard({ tour }) {
  const { city, id, country, tourType } = tour;
  return (
    <Link href={`/tours/${id}`} className="card card-compact rounded-xl bg-base-100">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-center capitalize">
          {city}, {country}, {tourType}
        </h2>
      </div>
    </Link>
  );
}
