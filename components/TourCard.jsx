import Link from "next/link";

export function TourCard({ tour }) {
  const { city, id, country, tourType, title } = tour;
  return (
    <Link href={`/tours/${id}`} className="card card-compact rounded-xl bg-base-100">
      <div className="card bg-base-100 w-80 shadow-xl">
        <figure>
          <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title capitalize">
            {city}, {country}
            <div className="badge badge-secondary">{tourType}</div>
          </h2>
          <p>{title}</p>
          {/* <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div> */}
        </div>
      </div>
    </Link>
  );
}
