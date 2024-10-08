export function TourInfo({ tour }) {
  const { title, description, tourType, tourLength, sights } = tour;
  console.log(tour);
  return (
    <div className="h-[calc(100vh-7rem)] py-5 my-5">
      <h1 className="text-4xl font-semibold mb-4">{title}</h1>
      <p className="leading-loose mb-6">{description}</p>

      <ul>
        {sights.map((sight) => {
          return (
            <li key={sight} className="mb-4 bg-base-100 p-4 rounded-xl">
              <p className="text">{sight}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
