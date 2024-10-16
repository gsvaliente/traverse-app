import { AllTours } from "@/components/AllTours";
import { getAllTours } from "@/utils/actions";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

export const metadata = {
  title: "Traverse App | All Tours",
  description: "This is the list where you can find all the tours you have created",
};

export default async function AllToursPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tours", ""],
    queryFn: () => getAllTours(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AllTours />
    </HydrationBoundary>
  );
}
