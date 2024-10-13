import { NewTour } from "@/components/NewTour";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export const metadata = {
  title: "Traverse App | New Tour",
  description:
    "Ask our AI travel guide to create a new tour, you can tell him the city, country, tour type and tour length. He will take care of the rest",
};

export default function NewTourPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
    </HydrationBoundary>
  );
}
