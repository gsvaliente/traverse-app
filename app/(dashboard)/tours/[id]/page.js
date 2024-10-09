import { TourInfo } from "@/components/TourInfo";
import { getSingleTour } from "@/utils/actions";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SingleTourPage({ params }) {
  const tour = await getSingleTour(params.id);

  if (!tour) {
    redirect("/tours");
  }

  return (
    <div>
      <Link href={"/tours"} className="btn btn-outline mt-12 mb-10">
        Return
      </Link>
      <div className="mt-5 max-w-3xl mx-auto">
        <TourInfo tour={tour} />
      </div>
    </div>
  );
}
