import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { Chat } from "@/components/Chat";

export const metadata = {
  title: "Traverse App | Chat",
  description:
    "Ask our reliable chat anything that comes up in your travels. From specific recommendations to general ones",
};

export default function ChatPage() {
  const queryClient = new QueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat />
    </HydrationBoundary>
  );
}
