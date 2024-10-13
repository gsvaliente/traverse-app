import Image from "next/image";

export function TourInfo({ tour }) {
  const { title, description, sights, image } = tour;
  console.log(tour);
  return (
    <div className=" py-5 my-5">
      <h1 className="text-4xl font-semibold mb-10 text-center font-subTitle">{title}</h1>
      <div className="flex justify-center items-center h-56 pb-8">
        <Image src={image} width={500} height={250} priority alt={title} className="object-cover h-56 rounded-xl" />
      </div>
      <p className="leading-loose mb-10">{description}</p>

      <div className="flex flex-wrap gap-5 justify-center mx-auto">
        {sights.map((sight, index) => {
          return (
            <div key={sight} className="card bg-base-300 w-80 shadow-xl mb-5">
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
