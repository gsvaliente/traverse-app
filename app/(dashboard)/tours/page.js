import { AllTours } from "@/components/AllTours";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export default async function AllToursPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AllTours />
    </HydrationBoundary>
  );
}
