export function TourInfo({ tour }) {
  const { title, description, tourType, tourLength, sights } = tour;
  console.log(tour);
  return (
    <div className="h-[calc(100vh-7rem)] py-5 my-5">
      <h1 className="text-4xl font-semibold mb-4 text-center">{title}</h1>
      <p className="leading-loose mb-6">{description}</p>

      <div className="flex flex-wrap gap-5 mx-auto">
        {sights.map((sight, index) => {
          return (
            <div className="card bg-base-300 w-80 shadow-xl carousel-item">
              <div className="absolute top-[-10px] left-[-10px] bg-white text-black w-10 h-10 flex items-center justify-center rounded-full shadow-md font-bold">
                {index + 1}
              </div>
              <div className="card-body">
                <p>{sight}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
